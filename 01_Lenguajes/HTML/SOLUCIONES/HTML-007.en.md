# Solution: HTML-007 — Metadata and external resources

**Status:** reviewed for structure. No automated validator was run.

## Files

- [HTML-007.html](HTML-007.html)
- [estilos.css](HTML-007.css)
- [app.js](HTML-007.js)
- [favicon.svg](../../EJERCICIOS/assets/favicon.svg)

## Important decisions

- description summarizes the page content.
- link rel="icon" links the icon.
- link rel="stylesheet" loads the external stylesheet.
- The script uses defer so it does not block the initial HTML parsing.
- The script updates the paragraph identified by status.
- noscript displays a note when JavaScript is unavailable.

## Review

- [x] Basic metadata is in head.
- [x] Resources are separated by type.
- [x] The external script uses defer.
- [ ] Copy the structure into a local folder and check the paths.
- [ ] Open it in a browser and check the text update.
