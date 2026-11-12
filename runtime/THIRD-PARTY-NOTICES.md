# Third-party runtime sources

These files are unmodified distributions except that the just-bash browser code is bundled/minified by esbuild and `node:zlib` is replaced by an explicit unsupported-command shim. Runtime code never enables compression commands.

- **just-bash 3.6.0**, Apache-2.0. Source and license: https://github.com/vercel-labs/just-bash . Exact npm package integrity is pinned in runtime/package-lock.json.
- **Pyodide 314.0.7**, MPL-2.0. Source and license: https://github.com/pyodide/pyodide . Matching full release sources: https://github.com/pyodide/pyodide/releases/tag/314.0.7 . Runtime distribution contains actual CPython 3.14.2 and its standard library; CPython license: https://docs.python.org/3/license.html . Additional Pyodide components retain their upstream licenses.
- **esbuild 0.27.2**, MIT (build tool only): https://github.com/evanw/esbuild .
- **Playwright 1.65.0**, Apache-2.0 (verification tool only): https://github.com/microsoft/playwright .

Pyodide core loader, assembly module, WASM, stdlib ZIP and lockfile are copied byte-for-byte from the pinned npm distribution. No third-party Python wheels are vendored or automatically downloaded. Browser runtime uses local assets, not a CDN.
