# JavaScript Guide

**Level:** fundamentals.  
**Recommended prerequisites:** basic logic and the ability to read HTML.  
**Goal:** write small programs, understand their data, and control the flow of instructions.

## 1. What is JavaScript?

JavaScript is a programming language. On a website it is used to respond to actions, update content, and communicate with services. It can also run outside the browser through environments such as Node.js.

HTML defines structure, CSS describes presentation, and JavaScript adds behavior. They are different technologies that can work together.

## 2. Where to run JavaScript

### In a browser

Open the developer tools and use the console. You can enter an instruction and see its result:

~~~js
console.log("Hello from JavaScript");
~~~

In an HTML file, connect an external file with:

~~~html
<script src="js/app.js" defer></script>
~~~

The defer attribute allows the file to download and run after the HTML has been parsed. The path must match the file location.

### With Node.js

Save the code in a file, for example app.js, open a terminal in that folder, and run:

~~~bash
node app.js
~~~

Node.js is not a browser. Browser features such as document and window are not globally available in Node.js.

## 3. Statements, case sensitivity, and comments

JavaScript is case-sensitive. nombre, Nombre, and NOMBRE are different identifiers.

A statement is an action performed by the program:

~~~js
const language = "JavaScript";
console.log(language);
~~~

Use a consistent style and finish statements with semicolons. JavaScript can insert some semicolons automatically, but it is better not to rely on rules you have not learned yet.

Single-line and multiline comments:

~~~js
// This comment uses one line.

/*
   This comment can
   use multiple lines.
*/
~~~

Comments should explain decisions or context. They should not simply repeat what the code already says.

## 4. Displaying information

console.log() writes information to the console. It is useful for observing values and checking program progress.

~~~js
const language = "JavaScript";
const version = 2026;

console.log(language);
console.log("Version:", version);
~~~

## 5. Variables and constants

A variable stores a value under a name.

~~~js
const name = "Alex";
let points = 10;

points = 15;
console.log(name, points);
~~~

- const: use it when the variable will not be reassigned.
- let: use it when the value needs to change.
- var: older syntax with different scope rules. It is not recommended for new code in this unit.

A const variable cannot be assigned a different value. This does not mean that objects stored in it are completely immutable; that topic will be covered when studying objects.

Use descriptive names. Variables commonly use camelCase: totalPrice, userName.

## 6. Basic data types

Values have types. This first unit mainly uses:

| Type | Example | Use |
|---|---|---|
| string | "Hello" | Text |
| number | 18, 3.5 | Numbers |
| boolean | true, false | True or false |
| undefined | a variable without an assigned value | No value assigned |
| null | null | Intentional absence of a value |

~~~js
const name = "Mara";
const age = 17;
const active = true;
let result;
const selection = null;

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof active);   // boolean
console.log(typeof result);   // undefined
~~~

A historical quirk: typeof null returns "object". This is a known language behavior; it does not mean null is a regular object.

## 7. Type conversion

Values received as text are not automatically converted to numbers in every operation.

~~~js
const countText = "4";
const count = Number(countText);

console.log(count + 2); // 6
~~~

Common conversions:

~~~js
Number("25");      // 25
String(25);        // "25"
Boolean(1);        // true
Boolean(0);        // false
~~~

Number() may produce NaN when the text does not represent a valid number:

~~~js
const value = Number("fourteen");
console.log(Number.isNaN(value)); // true
~~~

Do not confuse NaN with text. It is a special numeric value that represents an invalid numeric result.

## 8. Strings and template literals

Strings represent text. They can use single or double quotes. Template literals use backticks and allow expressions inside ${...}.

~~~js
const name = "Alex";
const topic = "variables";

console.log(`Hello, ${name}. Today you will study ${topic}.`);
~~~

Template literals are useful for combining text and values without joining many separate parts.

## 9. Operators

### Arithmetic

| Operator | Operation | Example |
|---|---|---|
| + | Addition | 5 + 2 |
| - | Subtraction | 5 - 2 |
| * | Multiplication | 5 * 2 |
| / | Division | 5 / 2 |
| % | Remainder | 5 % 2 |
| ** | Power | 5 ** 2 |

The + operator also concatenates strings:

~~~js
console.log("Hello " + "world");
~~~

### Comparison

~~~js
10 > 5;       // true
10 <= 5;      // false
10 === 10;    // true
10 !== "10";  // true
~~~

Prefer === and !== because they compare without automatically converting types. == and != allow conversions that can produce unexpected results.

### Logical

- &&: AND, both conditions must be true.
- ||: OR, at least one condition must be true.
- !: NOT, reverses a boolean value.

~~~js
const hasAccount = true;
const paymentConfirmed = false;

console.log(hasAccount && paymentConfirmed); // false
console.log(hasAccount || paymentConfirmed); // true
console.log(!hasAccount);                    // false
~~~

## 10. Conditionals

if runs a block when a condition is true. else defines what happens otherwise.

~~~js
const grade = 85;

if (grade >= 70) {
    console.log("Passed");
} else {
    console.log("Not passed yet");
}
~~~

You can chain conditions with else if:

~~~js
const hour = 14;

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 19) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}
~~~

switch is useful when comparing the same value against several options:

~~~js
const option = 2;

switch (option) {
    case 1:
        console.log("Home");
        break;
    case 2:
        console.log("Settings");
        break;
    default:
        console.log("Unknown option");
}
~~~

break prevents execution from continuing into the next case. default runs when no case matches.

## 11. Loops

Loops repeat instructions.

### for

Use it when repetition has a counter or a known number of steps.

~~~js
for (let number = 1; number <= 5; number++) {
    console.log(number);
}
~~~

The loop has three parts: initial value, condition, and update.

### while

It repeats while the condition is true.

~~~js
let attempts = 3;

while (attempts > 0) {
    console.log("Attempts left:", attempts);
    attempts--;
}
~~~

Make sure the condition changes inside the loop when necessary. If it never becomes false, the program may run indefinitely.

### break and continue

- break ends the loop.
- continue skips to the next iteration.

Use them when they improve clarity. Avoid creating loops that are difficult to follow.

## 12. Functions

A function groups instructions that perform a task. It can receive parameters and return a result.

~~~js
function add(a, b) {
    return a + b;
}

const total = add(4, 6);
console.log(total); // 10
~~~

- Parameters: names received by the function.
- Arguments: values passed when calling the function.
- return: sends a result back and ends that function call.

A function may have no explicit return value. In that case, its result is undefined.

## 13. Common errors

| Problem | Common cause | Check |
|---|---|---|
| ReferenceError | Unknown name or variable outside its scope | Check spelling and declaration |
| SyntaxError | Incomplete or incorrect syntax | Check parentheses, braces, quotes, and separators |
| NaN | Invalid conversion or numeric operation | Check the value before converting |
| Text result | Strings were combined instead of numbers | Convert data when necessary |
| Infinite loop | The condition never becomes false | Check the counter update |

## 14. Recommended practice

Solve the exercises in order: [JS-001 to JS-006](EJERCICIOS/README.md). Run each file with Node.js or in the browser console. Change input values and check how the output changes.

## Sources

- [MDN — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN — Data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN — Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [Node.js — Run scripts](https://nodejs.org/en/learn/command-line/run-nodejs-scripts)

See also the [Spanish guide](GUIA.md).
