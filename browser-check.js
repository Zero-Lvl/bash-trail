var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/compatibility.mjs
function environmentDefault() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  return {};
}
function getBrowserCapabilities(environment) {
  var env = environment || environmentDefault();
  return {
    worker: typeof env.Worker === "function",
    promise: typeof env.Promise === "function",
    map: typeof env.Map === "function",
    set: typeof env.Set === "function",
    url: typeof env.URL === "function",
    textEncoder: typeof env.TextEncoder === "function",
    textDecoder: typeof env.TextDecoder === "function",
    arrayAt: !!(env.Array && typeof env.Array.prototype.at === "function"),
    objectHasOwn: !!(env.Object && typeof env.Object.hasOwn === "function"),
    stringReplaceAll: !!(env.String && typeof env.String.prototype.replaceAll === "function"),
    structuredClone: typeof env.structuredClone === "function",
    webAssembly: !!(env.WebAssembly && typeof env.WebAssembly.instantiate === "function"),
    sharedArrayBuffer: typeof env.SharedArrayBuffer === "function",
    crossOriginIsolated: env.crossOriginIsolated === true,
    secureContext: env.isSecureContext === true,
    touch: !!(env.navigator && env.navigator.maxTouchPoints > 0),
    visualViewport: !!env.visualViewport
  };
}
function checkBrowserCompatibility(environment) {
  var env = environment || environmentDefault();
  var capabilities = getBrowserCapabilities(env);
  var ua = env.navigator && typeof env.navigator.userAgent === "string" ? env.navigator.userAgent.slice(0, 512) : "Unavailable";
  var ios = /(?:iPhone|iPad|iPod).*?OS (\d+(?:_\d+){0,2})/.exec(ua);
  var safari = /Version\/(\d+(?:\.\d+){0,2}).*Safari\//.exec(ua);
  var required = ["worker", "promise", "map", "set", "url", "textEncoder", "textDecoder", "arrayAt", "objectHasOwn", "stringReplaceAll"];
  var missing = required.filter(function(key) {
    return !capabilities[key];
  });
  var warnings = [];
  if (!capabilities.webAssembly) warnings.push("WebAssembly is unavailable. Shell checks may work, but real Python cannot start.");
  if (!capabilities.structuredClone) warnings.push("structuredClone is unavailable; the lesson app needs a newer browser even if the shell can start.");
  if (ios && parseFloat(ios[1].replace(/_/g, ".")) < 16.4) warnings.push("Pyodide 314.0.7 recommends Safari 16.4 or newer. This is a user-agent hint, not a device test.");
  return {
    capabilities,
    browser: { userAgent: ua, iosVersion: ios ? ios[1].replace(/_/g, ".") : null, safariVersion: safari ? safari[1] : null, versionSource: "user-agent; may be emulated", physicalDeviceVerified: false },
    shellSupported: missing.length === 0,
    pythonSupported: missing.length === 0 && capabilities.webAssembly,
    appSupported: missing.length === 0 && capabilities.structuredClone,
    missing,
    warnings,
    guidance: missing.length ? "Required browser features are missing: " + missing.join(", ") + ". Update Safari/iOS or try a current browser, then retry Browser check." : "Feature presence is not proof of compatibility. Run the real worker check; physical iPhone Safari remains unverified."
  };
}

// src/runtime-client.mjs
var SAFE_NAMES = ["Error", "SecurityError", "TypeError", "SyntaxError", "NetworkError", "DataCloneError", "NotSupportedError"];
var RuntimeError = class extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = "RuntimeError";
    this.code = code;
    this.details = details;
    this.retryable = true;
  }
};
var RuntimeClient = class {
  constructor({ factory, timeoutMs = 15e3, initTimeoutMs = 9e4, onError = () => {
  } } = {}) {
    this.factory = factory != null ? factory : (() => {
      const compatibility = checkBrowserCompatibility();
      if (!compatibility.shellSupported) throw new RuntimeError(compatibility.guidance, "BROWSER_UNSUPPORTED", { stage: "capabilities", missing: compatibility.missing });
      return new Worker(new URL("./runtime/worker.js", import.meta.url), { type: "module" });
    });
    this.onError = onError;
    this.timeoutMs = timeoutMs;
    this.initTimeoutMs = initTimeoutMs;
    this.sequence = 0;
    this.pending = /* @__PURE__ */ new Map();
    this.worker = null;
    this.generation = 0;
    this.pythonReady = false;
    this.pythonLoading = null;
  }
  ensure() {
    if (this.worker) return;
    const worker = this.factory();
    this.worker = worker;
    worker.onmessage = ({ data }) => {
      var _a, _b;
      if (this.worker !== worker) return;
      if (!data || !Number.isSafeInteger(data.id) || typeof data.ok !== "boolean") {
        this.fail(new RuntimeError("The runtime sent an unreadable response. Retry to start a fresh worker, or run Browser check.", "WORKER_PROTOCOL", { stage: "worker-message", asset: "runtime/worker.js" }));
        return;
      }
      const entry = this.pending.get(data.id);
      if (!entry) return;
      clearTimeout(entry.timer);
      this.pending.delete(data.id);
      if (data.ok) entry.resolve(data.result);
      else entry.reject(new RuntimeError(typeof data.error === "string" ? data.error : (_b = (_a = data.error) == null ? void 0 : _a.message) != null ? _b : "Runtime operation failed", "RUNTIME_OPERATION", { stage: "runtime-operation", operation: entry.op }));
    };
    worker.onerror = (event) => {
      if (this.worker !== worker) return;
      const details = { stage: "worker-load-or-execution", asset: "runtime/worker.js" };
      if (Number.isInteger(event.lineno) && event.lineno > 0) details.line = event.lineno;
      if (Number.isInteger(event.colno) && event.colno > 0) details.column = event.colno;
      this.fail(new RuntimeError("Runtime worker failed to load or execute. Retry; if this repeats, reload, check content blockers/network access, update Safari/iOS and run Browser check.", "WORKER_ERROR", details));
    };
    const onMessageError = () => {
      if (this.worker === worker) this.fail(new RuntimeError("The browser could not read a runtime message. Retry with a fresh worker; if this repeats, reload or run Browser check.", "WORKER_MESSAGE_ERROR", { stage: "worker-message", asset: "runtime/worker.js" }));
    };
    if (typeof worker.addEventListener === "function") worker.addEventListener("messageerror", onMessageError);
    else worker.onmessageerror = onMessageError;
  }
  request(op, payload = {}, { initialization = false } = {}) {
    try {
      this.ensure();
    } catch (cause) {
      const error = cause instanceof RuntimeError ? cause : new RuntimeError("Could not start the runtime worker. Reload or retry; check browser content restrictions and run Browser check.", "WORKER_CREATION", { stage: "worker-creation", asset: "runtime/worker.js", name: SAFE_NAMES.includes(cause == null ? void 0 : cause.name) ? cause.name : "Error" });
      this.onError(error);
      return Promise.reject(error);
    }
    const id = ++this.sequence;
    return new Promise((resolve, reject) => {
      const budgetMs = op === "init" || initialization ? this.initTimeoutMs : this.timeoutMs;
      const timer = setTimeout(() => this.fail(new RuntimeError(`${op} timed out after ${Math.ceil(budgetMs / 1e3)} seconds. Work since the last snapshot may be lost. Retry to restore saved work; run Browser check if loading keeps failing.`, "RUNTIME_TIMEOUT", { stage: initialization ? "python-warmup" : "runtime-request", operation: op, budgetMs })), budgetMs);
      this.pending.set(id, { resolve, reject, timer, op });
      try {
        this.worker.postMessage(__spreadProps(__spreadValues({}, payload), { id, op }));
      } catch (cause) {
        this.fail(new RuntimeError("The browser could not send work to the runtime worker. Retry, or reload and run Browser check.", "WORKER_POST_MESSAGE", { stage: "worker-send", operation: op, name: SAFE_NAMES.includes(cause.name) ? cause.name : "Error" }));
      }
    });
  }
  fail(error) {
    this.stop(error);
    this.onError(error);
  }
  stop(message = "Stopped. Last saved work is preserved; the worker will restart on your next action.") {
    var _a;
    const error = message instanceof Error ? message : new RuntimeError(message, "STOPPED", { stage: "stopped" });
    this.generation++;
    (_a = this.worker) == null ? void 0 : _a.terminate();
    this.worker = null;
    this.pythonReady = false;
    this.pythonLoading = null;
    for (const p of this.pending.values()) {
      clearTimeout(p.timer);
      p.reject(error);
    }
    this.pending.clear();
  }
  async init({ fixtures = {}, directories = [], cwd = "/home/learner" } = {}) {
    this.stop();
    const generation = this.generation;
    const result = await this.request("init", { fixtures, directories, cwd, pyodideURL: new URL("./vendor/pyodide/", import.meta.url).href });
    if (generation !== this.generation) throw new RuntimeError("Stopped before initialization completed. Retry to restore saved work.", "STOPPED", { stage: "stopped" });
    if (Object.keys(fixtures).some((path) => path.endsWith(".py"))) await this.preparePython();
    if (generation !== this.generation) throw new RuntimeError("Stopped before initialization completed. Retry to restore saved work.", "STOPPED", { stage: "stopped" });
    return result;
  }
  async preparePython() {
    if (this.pythonReady) return;
    if (!this.pythonLoading) {
      const generation = this.generation;
      const loading = this.request("exec", { command: 'python3 -c "pass"' }, { initialization: true }).then((result) => {
        if (generation !== this.generation) throw new RuntimeError("Stopped before Python initialization completed. Retry to restore saved work.", "STOPPED", { stage: "python-warmup" });
        if (result.exitCode !== 0) {
          const error = new RuntimeError("Python initialization failed. Retry; if it repeats, check the network, reload and run Browser check with Python enabled.", "PYTHON_INITIALIZATION", { stage: "python-warmup", asset: "vendor/pyodide/" });
          this.fail(error);
          throw error;
        }
        this.pythonReady = true;
      }).finally(() => {
        if (this.pythonLoading === loading) this.pythonLoading = null;
      });
      this.pythonLoading = loading;
    }
    await this.pythonLoading;
  }
  async exec(command) {
    const generation = this.generation;
    if (/\bpython(?:3)?\b/.test(command)) await this.preparePython();
    if (generation !== this.generation) throw new RuntimeError("Stopped before execution began. Retry to restore saved work.", "STOPPED", { stage: "stopped" });
    return this.request("exec", { command });
  }
  write(path, text) {
    return this.request("write", { path, text });
  }
  read(path) {
    return this.request("read", { path });
  }
  snapshot() {
    return this.request("snapshot");
  }
};

// src/browser-check.mjs
var CAPABILITIES = ["worker", "promise", "map", "set", "url", "textEncoder", "textDecoder", "arrayAt", "objectHasOwn", "stringReplaceAll", "structuredClone", "webAssembly", "sharedArrayBuffer", "crossOriginIsolated", "secureContext", "touch", "visualViewport"];
var STAGES = ["capabilities", "worker", "shell", "python-warmup", "python"];
var MESSAGES = {
  BROWSER_UNSUPPORTED: "Required browser features are missing. Update Safari/iOS or use a current browser, then retry.",
  WORKER_CREATION: "The browser could not create the same-origin worker. Retry; check browser restrictions or content blockers.",
  WORKER_ERROR: "The worker failed to load or execute. Retry; check network/content blockers, reload, and update Safari/iOS if needed.",
  WORKER_MESSAGE_ERROR: "The browser could not read a worker message. Retry with a fresh worker or reload.",
  WORKER_POST_MESSAGE: "The browser could not send a worker message. Retry or reload.",
  WORKER_PROTOCOL: "The worker returned an unreadable response. Retry or reload to replace stale assets.",
  RUNTIME_TIMEOUT: "The runtime exceeded its time budget. Retry on a stable connection; Python warmup may take up to 90 seconds.",
  RUNTIME_OPERATION: "The fixed runtime check failed. Retry; use the failing stage and capabilities to investigate.",
  PYTHON_INITIALIZATION: "Real Python failed to initialize. Retry; check network/content blockers and Safari/iOS version.",
  PYTHON_UNAVAILABLE: "WebAssembly is unavailable, so real Python cannot run in this browser.",
  CHECK_MISMATCH: "The actual interpreter result did not match the fixed browser-check output.",
  STOPPED: "Browser check stopped. Retry starts a fresh empty worker.",
  DIAGNOSTIC_FAILED: "Browser check could not complete. Reload and retry; use this report to describe the failing stage."
};
function safeError(error) {
  var code = error && Object.prototype.hasOwnProperty.call(MESSAGES, error.code) ? error.code : "DIAGNOSTIC_FAILED";
  var out = { code, message: MESSAGES[code], retryable: true };
  var source = error && error.details;
  var details = {};
  if (source) {
    if (["capabilities", "worker-creation", "worker-load-or-execution", "worker-message", "worker-send", "runtime-request", "runtime-operation", "python-warmup", "stopped"].indexOf(source.stage) !== -1) details.stage = source.stage;
    if (["init", "exec", "read", "write", "snapshot"].indexOf(source.operation) !== -1) details.operation = source.operation;
    if (["runtime/worker.js", "vendor/pyodide/"].indexOf(source.asset) !== -1) details.asset = source.asset;
    if (["Error", "SecurityError", "TypeError", "SyntaxError", "NetworkError", "DataCloneError", "NotSupportedError"].indexOf(source.name) !== -1) details.name = source.name;
    ["line", "column", "budgetMs"].forEach(function(key) {
      if (typeof source[key] === "number" && isFinite(source[key]) && source[key] >= 0) details[key] = source[key];
    });
    if (Array.isArray(source.missing)) details.missing = source.missing.filter(function(key) {
      return CAPABILITIES.indexOf(key) !== -1;
    });
  }
  out.details = details;
  return out;
}
function safeResult(result) {
  var out = { validated: !!(result && result.validated) };
  if (!result) return out;
  if (["", "browser-check", "browser-check\n"].indexOf(result.stdout) !== -1) out.stdout = result.stdout;
  if (result.stderr === "") out.stderr = "";
  out.stderrPresent = typeof result.stderr === "string" && result.stderr.length > 0;
  if (typeof result.exitCode === "number" && isFinite(result.exitCode)) out.exitCode = result.exitCode;
  return out;
}
function validate(result, expected) {
  if (!result || result.stdout !== expected || result.stderr !== "" || result.exitCode !== 0) throw new RuntimeError(MESSAGES.CHECK_MISMATCH, "CHECK_MISMATCH");
  return { stdout: result.stdout, stderr: result.stderr, exitCode: result.exitCode, validated: true };
}
function formatBrowserReport(report) {
  report = report || {};
  var browser = report.browser || {};
  var out = {
    schemaVersion: 1,
    kind: "bash-trail-browser-check",
    physicalDeviceVerified: false,
    passed: report.passed === true,
    pythonRequested: report.pythonRequested === true,
    browser: { userAgent: typeof browser.userAgent === "string" ? browser.userAgent.slice(0, 512) : "Unavailable", iosVersion: typeof browser.iosVersion === "string" && /^\d+(?:\.\d+){0,2}$/.test(browser.iosVersion) ? browser.iosVersion : null, safariVersion: typeof browser.safariVersion === "string" && /^\d+(?:\.\d+){0,2}$/.test(browser.safariVersion) ? browser.safariVersion : null, versionSource: "user-agent; may be emulated", physicalDeviceVerified: false },
    capabilities: {},
    stages: []
  };
  CAPABILITIES.forEach(function(key) {
    out.capabilities[key] = !!(report.capabilities && report.capabilities[key]);
  });
  if (Array.isArray(report.stages)) report.stages.forEach(function(stage) {
    if (!stage || STAGES.indexOf(stage.id) === -1) return;
    var clean = { id: stage.id, status: ["running", "passed", "failed", "skipped"].indexOf(stage.status) !== -1 ? stage.status : "failed" };
    if (typeof stage.durationMs === "number" && isFinite(stage.durationMs) && stage.durationMs >= 0) clean.durationMs = Math.round(stage.durationMs);
    if (stage.result) clean.result = safeResult(stage.result);
    if (stage.error) clean.error = safeError(stage.error);
    out.stages.push(clean);
  });
  if (report.error) out.error = safeError(report.error);
  return JSON.stringify(out, null, 2);
}
async function runBrowserCheck(options) {
  options = options || {};
  var compatibility = checkBrowserCompatibility();
  var report = { passed: false, pythonRequested: options.python === true, browser: compatibility.browser, capabilities: compatibility.capabilities, stages: [] };
  var client = new RuntimeClient({ timeoutMs: options.timeoutMs === void 0 ? 15e3 : options.timeoutMs, initTimeoutMs: options.initTimeoutMs === void 0 ? 9e4 : options.initTimeoutMs });
  var signal = options.signal;
  function abort() {
    client.stop();
  }
  function notify(stage2) {
    if (typeof options.onStage === "function") options.onStage(JSON.parse(JSON.stringify(stage2)));
  }
  async function stage(id, action) {
    var entry = { id, status: "running" };
    report.stages.push(entry);
    notify(entry);
    var started = Date.now();
    try {
      if (signal && signal.aborted) throw new RuntimeError(MESSAGES.STOPPED, "STOPPED");
      var result = await action();
      entry.status = "passed";
      if (result) entry.result = result;
    } catch (error) {
      entry.status = "failed";
      entry.error = safeError(error);
      throw error;
    } finally {
      entry.durationMs = Date.now() - started;
      notify(entry);
    }
  }
  if (signal && typeof signal.addEventListener === "function") signal.addEventListener("abort", abort);
  try {
    await stage("capabilities", async function() {
      if (!compatibility.shellSupported) throw new RuntimeError(compatibility.guidance, "BROWSER_UNSUPPORTED", { stage: "capabilities", missing: compatibility.missing });
    });
    await stage("worker", async function() {
      await client.init({ fixtures: {}, directories: [], cwd: "/home/learner" });
    });
    await stage("shell", async function() {
      return validate(await client.exec("printf browser-check"), "browser-check");
    });
    if (report.pythonRequested) {
      await stage("python-warmup", async function() {
        if (!compatibility.pythonSupported) throw new RuntimeError(MESSAGES.PYTHON_UNAVAILABLE, "PYTHON_UNAVAILABLE");
        await client.preparePython();
      });
      await stage("python", async function() {
        return validate(await client.exec(`python3 -c 'print("browser-check")'`), "browser-check\n");
      });
    } else {
      var skipped = { id: "python", status: "skipped" };
      report.stages.push(skipped);
      notify(skipped);
    }
    report.passed = true;
  } catch (error) {
    report.error = safeError(error);
  } finally {
    client.stop();
    if (signal && typeof signal.removeEventListener === "function") signal.removeEventListener("abort", abort);
  }
  return JSON.parse(formatBrowserReport(report));
}
export {
  formatBrowserReport,
  runBrowserCheck
};
