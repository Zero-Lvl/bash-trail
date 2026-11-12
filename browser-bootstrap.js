/* Classic ES5 bootstrap: deliberately independent of module/app parsing. */
(function () {
  'use strict';
  var timer;
  function ready() {
    window.__BASH_TRAIL_READY__ = true;
    window.clearTimeout(timer);
    var fallback = document.getElementById('boot-fallback');
    if (fallback && fallback.parentNode) fallback.parentNode.removeChild(fallback);
  }
  function publishError() {
    var details = { code: 'BROWSER_SCRIPT_ERROR', message: 'A browser script error interrupted this activity. Retry; if it repeats, reload or run Browser check.', details: { stage: 'browser-script' } };
    window.__BASH_TRAIL_BOOT_ERROR__ = details;
    var event;
    if (typeof window.CustomEvent === 'function') event = new CustomEvent('bash-trail-browser-error', { detail: details });
    else { event = document.createEvent('CustomEvent'); event.initCustomEvent('bash-trail-browser-error', false, false, details); }
    window.dispatchEvent(event);
  }
  function showFallback() {
    if (window.__BASH_TRAIL_READY__) { publishError(); return; }
    window.clearTimeout(timer);
    var target = document.getElementById('boot-fallback');
    if (!target) {
      target = document.createElement('div'); target.id = 'boot-fallback';
      (document.getElementById('app') || document.body).appendChild(target);
    }
    while (target.firstChild) target.removeChild(target.firstChild);
    target.setAttribute('role', 'alert');
    var message = document.createElement('p');
    message.appendChild(document.createTextNode('The page could not start. Reload this page, check your connection or content blockers, and update Safari/iOS if needed. Saved lessons stay on this device.'));
    target.appendChild(message);
    var reload = document.createElement('button'); reload.type = 'button'; reload.appendChild(document.createTextNode('Reload page')); reload.onclick = function () { window.location.reload(); };
    target.appendChild(reload); target.appendChild(document.createTextNode(' '));
    var check = document.createElement('a'); check.href = './browser-check.html'; check.appendChild(document.createTextNode('Run browser check')); target.appendChild(check);
    publishError();
  }
  window.addEventListener('bash-trail-ready', ready);
  window.addEventListener('error', function (event) {
    // Resource failures from images/CSS must not claim the app failed to parse.
    if (event.target && event.target !== window && event.target.tagName !== 'SCRIPT') return;
    showFallback();
  }, true);
  window.addEventListener('unhandledrejection', function () { showFallback(); });
  if (window.__BASH_TRAIL_READY__) ready();
  else timer = window.setTimeout(showFallback, 12000);
}());
