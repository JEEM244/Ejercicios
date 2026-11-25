# Solution — JS-022

## Expected result

Two simulated operations run. One fulfills the promise and the other rejects it. The `finally` block runs for both.

## Explanation

1. `consultarEstado()` returns a new `Promise` instance.
2. `setTimeout()` simulates a delay.
3. `resolve()` reports a successful result.
4. `reject()` reports an error through an `Error` object.
5. `then()` handles the result, `catch()` handles the rejection, and `finally()` runs when the operation finishes.

Both processes start without requiring one to wait for the other.

## Run

~~~bash
node ejercicio.js
~~~

File: [exercise.js](ejercicio.js).
