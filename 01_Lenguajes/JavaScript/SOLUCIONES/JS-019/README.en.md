# Solution — JS-019

## Expected result

The page reads two numbers and displays their sum and average. The calculations are defined in a separate module.

## Explanation

1. `operaciones.js` exports two named functions.
2. `app.js` imports them with braces and a relative path.
3. The form listens for `submit` and cancels navigation.
4. The values are converted with `Number()`.
5. Empty inputs and non-finite values are checked before calculating.
6. The result is displayed with `textContent`.

## Files

- [index.html](index.html)
- [app.js](app.js)
- [operaciones.js](modulos/operaciones.js)
