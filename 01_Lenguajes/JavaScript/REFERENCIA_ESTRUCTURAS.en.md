# Quick Reference: Arrays, Objects, and Debugging

For explanations and examples, see [GUIA_ESTRUCTURAS.en.md](GUIA_ESTRUCTURAS.en.md).

## Arrays

~~~js
const data = ["A", "B", "C"];

data[0];              // "A"
data.length;          // 3
data.push("D");       // adds to the end
data.pop();           // removes and returns the last item
data.includes("A");  // true
data.indexOf("B");   // 1
~~~

Iteration:

~~~js
for (const item of data) {
    console.log(item);
}
~~~

## Array methods

| Method | Result |
|---|---|
| forEach(fn) | Runs fn for each item; returns undefined |
| map(fn) | New transformed array |
| filter(fn) | New array with matching items |
| find(fn) | First matching item or undefined |
| reduce(fn, initial) | One accumulated value |

~~~js
const numbers = [1, 2, 3, 4];

numbers.forEach((n) => console.log(n));
numbers.map((n) => n * 2);          // [2, 4, 6, 8]
numbers.filter((n) => n > 2);       // [3, 4]
numbers.find((n) => n === 3);       // 3
numbers.reduce((total, n) => total + n, 0); // 10
~~~

## Strings

~~~js
const text = "  Hello Web  ";

text.trim();            // "Hello Web"
text.toLowerCase();     // "  hello web  "
text.toUpperCase();     // "  HELLO WEB  "
text.includes("Web");   // true
text.slice(2, 7);       // "Hello"
~~~

## Objects

~~~js
const person = {
    name: "Mara",
    age: 17,
    greet() {
        return "Hello, " + this.name;
    }
};

person.name;             // dot notation
person["age"];           // bracket notation
person.group = "5L1";    // add property
person.greet();          // call method
Object.keys(person);     // array of own enumerable keys
~~~

## Arrays of objects

~~~js
const products = [
    { name: "Book", price: 90 },
    { name: "Pen", price: 15 }
];

products.map((p) => p.name);
products.filter((p) => p.price > 20);
products.find((p) => p.name === "Book");
~~~

## Destructuring

~~~js
const [first, second] = ["A", "B"];
const { name, age } = { name: "Ana", age: 16 };
~~~

## Scope

- Global: available in the script's general context.
- Function: inside the function where it is declared.
- Block: inside the braces containing a let or const declaration.

~~~js
function calculate() {
    const local = 10;
    return local;
}
~~~

## Debugging

~~~js
console.log("value:", value);
console.table(list);
console.warn("notice");
console.error("error");
debugger;
~~~

**debugger;** pauses execution when a debugger is active.

## More information

- [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN — Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

See also the [Spanish reference](REFERENCIA_ESTRUCTURAS.md).
