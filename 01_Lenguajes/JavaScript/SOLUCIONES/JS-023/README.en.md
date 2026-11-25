# Solution — JS-023

## Expected result

Both simulated requests start without waiting for each other. When both finish, their results are displayed. If one fails, the `catch` block handles the error. The `finally` block runs in either case.

## Explanation

- `cargarGrupo()` returns a promise that fulfills after a timer.
- The third parameter can simulate a rejection.
- `iniciarPanel()` is declared with `async`.
- `Promise.all()` receives both promises and lets the program wait for their results as one group.
- `await` waits for the result inside the asynchronous function.
- `try...catch...finally` separates success, error, and cleanup.

To test the error, change `iniciarPanel()` to `iniciarPanel(true)`.

## Run

~~~bash
node ejercicio.js
~~~

File: [exercise.js](ejercicio.js).
