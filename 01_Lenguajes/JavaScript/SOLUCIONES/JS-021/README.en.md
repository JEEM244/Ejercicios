# Solution — JS-021

## Expected result

The program converts the object into readable JSON text, restores the object, and displays its properties. It then tries to parse invalid text and catches the error.

## Explanation

- `JSON.stringify(student, null, 2)` converts the object into text with two-space indentation.
- `JSON.parse(jsonText)` restores a JavaScript value.
- The test text includes a trailing comma, which is invalid in JSON.
- `try...catch` displays a message instead of ending with an unhandled exception.

## Run

~~~bash
node ejercicio.js
~~~

File: [exercise.js](ejercicio.js).
