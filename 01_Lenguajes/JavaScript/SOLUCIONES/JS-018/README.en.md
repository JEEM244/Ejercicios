# Solution — JS-018

## Expected result

When one or more fields do not meet their constraints, the browser reports the problems. When all fields are valid, a local confirmation appears.

## Explanation

1. The form has the `novalidate` attribute, so the browser does not block the `submit` event before the listener runs.
2. `checkValidity()` checks the constraints defined on the controls.
3. When the result is `false`, `reportValidity()` asks the browser to display validation messages.
4. When all fields are valid, `FormData` retrieves the name.
5. The confirmation is displayed with `textContent`.

Browser validation does not replace server-side checks. This example does not transmit or store data.

## Files

- [index.html](index.html)
- [app.js](app.js)
