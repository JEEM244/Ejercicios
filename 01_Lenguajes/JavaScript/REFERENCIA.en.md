# JavaScript Quick Reference

A short reference for the syntax covered in the initial unit. For explanations, see [GUIA.en.md](GUIA.en.md).

## Output

~~~js
console.log("Message");
console.log("Total:", 25);
~~~

## Variables

~~~js
const name = "Alex"; // cannot be reassigned
let counter = 0;     // can change
counter++;
~~~

## Types and conversions

~~~js
typeof "text";           // "string"
typeof 20;               // "number"
typeof true;             // "boolean"
typeof undefined;        // "undefined"

Number("42");             // 42
String(42);                // "42"
Boolean(1);                // true
Number.isNaN(Number("x")); // true
~~~

Note: typeof null returns "object" for historical compatibility.

## Template strings

~~~js
const user = "Mara";
console.log(`Welcome, ${user}`);
~~~

## Operators

| Group | Operators |
|---|---|
| Arithmetic | + - * / % ** |
| Assignment | = += -= *= /= |
| Comparison | === !== > < >= <= |
| Logical | && || ! |
| Increment | ++ -- |

Prefer === and !== over == and != to avoid unexpected implicit conversions.

## Conditionals

~~~js
if (condition) {
    // statements
} else if (anotherCondition) {
    // other statements
} else {
    // alternative
}
~~~

~~~js
switch (option) {
    case 1:
        console.log("One");
        break;
    default:
        console.log("Another option");
}
~~~

## Loops

~~~js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
~~~

~~~js
let counter = 3;
while (counter > 0) {
    console.log(counter);
    counter--;
}
~~~

## Functions

~~~js
function add(a, b) {
    return a + b;
}

const result = add(2, 3);
~~~

## Running a file

~~~bash
node file.js
~~~

## Common errors

- ReferenceError: undeclared name or value outside its scope.
- SyntaxError: invalid syntax.
- NaN: invalid numeric result.
- TypeError: operation is not allowed for that value.

More information: [MDN — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
See also the [Spanish reference](REFERENCIA.md).
