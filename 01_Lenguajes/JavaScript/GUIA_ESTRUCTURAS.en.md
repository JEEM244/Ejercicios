# JavaScript Guide: Data Structures and Debugging

**Level:** beginner-intermediate.  
**Prerequisites:** [JavaScript fundamentals](GUIA.en.md), especially variables, conditionals, loops, and functions.  
**Goal:** organize data, iterate over collections, understand variable scope, and find errors in a structured way.

## 1. Arrays

An array stores multiple values in one variable. Create it with square brackets:

~~~js
const languages = ["HTML", "CSS", "JavaScript"];
~~~

Each item has a position called an index. Indexes start at zero:

~~~js
console.log(languages[0]); // HTML
console.log(languages[2]); // JavaScript
console.log(languages.length); // 3
~~~

An out-of-range index returns **undefined**. The **length** property tells you how many items the array contains.

### Add, remove, and check items

~~~js
const tasks = ["Read", "Practice"];

tasks.push("Review"); // adds to the end
const last = tasks.pop(); // removes and returns the last item

console.log(tasks.includes("Read")); // true
console.log(tasks.indexOf("Practice")); // 1
~~~

**push()** changes the array and returns its new length. **pop()** changes the array and returns the removed item. **includes()** returns true or false. **indexOf()** returns the position or -1 if the value is not found.

### Iterate over an array

**for...of** gives you each item directly:

~~~js
const subjects = ["Programming", "Databases", "English"];

for (const subject of subjects) {
    console.log(subject);
}
~~~

You can also use a **for** loop when you need the index.

## 2. Array methods

Methods let you inspect, transform, or select information. It is important to know whether a method changes the original array or returns a new result.

### forEach()

Runs a function once for each item. Use it to perform an action, not to build a new array:

~~~js
const prices = [20, 35, 50];

prices.forEach((price) => {
    console.log(price);
});
~~~

### map()

Builds a new array by transforming each item:

~~~js
const prices = [20, 35, 50];
const withTax = prices.map((price) => price * 1.16);

console.log(withTax); // [23.2, 40.6, 58]
~~~

### filter()

Builds a new array containing only the items that match a condition:

~~~js
const ages = [15, 18, 21, 16];
const adults = ages.filter((age) => age >= 18);

console.log(adults); // [18, 21]
~~~

### find()

Returns the first item that matches a condition. If there is no match, it returns **undefined**:

~~~js
const users = ["Ana", "Luis", "Mara"];
const found = users.find((user) => user === "Luis");

console.log(found); // Luis
~~~

### reduce()

Combines array items into one result, such as a sum. The second argument sets the accumulator's initial value:

~~~js
const amounts = [20, 30, 15];
const total = amounts.reduce((accumulator, amount) => accumulator + amount, 0);

console.log(total); // 65
~~~

Start using **reduce()** when the accumulated result is clear. For filtering or transforming lists, **filter()** and **map()** usually express the intention more clearly.

## 3. String methods

Strings also have methods. These methods return a new string; they do not change the original text.

~~~js
const input = "  JavaScript Web  ";

console.log(input.trim()); // "JavaScript Web"
console.log(input.toLowerCase()); // "  javascript web  "
console.log(input.toUpperCase()); // "  JAVASCRIPT WEB  "
console.log(input.includes("Web")); // true
console.log(input.slice(2, 12)); // "JavaScript"
~~~

- **trim():** removes spaces at the beginning and end.
- **toLowerCase():** converts letters to lowercase.
- **toUpperCase():** converts letters to uppercase.
- **includes():** checks whether a piece of text exists.
- **slice():** extracts part of a string using positions.

A common way to normalize text is to combine **trim()** and **toLowerCase()**:

~~~js
const email = "  Student@Example.com ";
const normalized = email.trim().toLowerCase();

console.log(normalized); // student@example.com
~~~

## 4. Objects

An object groups related data using named properties:

~~~js
const student = {
    name: "Mara",
    age: 17,
    active: true
};
~~~

Access a property with dot or bracket notation:

~~~js
console.log(student.name);
console.log(student["age"]);
~~~

Bracket notation is useful when a property name is stored in a variable:

~~~js
const field = "name";
console.log(student[field]);
~~~

### Update and add properties

Although a **const** variable cannot be reassigned, an object's properties can be changed:

~~~js
student.age = 18;
student.group = "5L1";

console.log(student.age);
console.log(student.group);
~~~

Do not confuse reassigning a variable with changing the contents of an object.

### Nested objects

A property can contain another object:

~~~js
const course = {
    name: "Web programming",
    tutor: {
        name: "Dora",
        group: "5L1"
    }
};

console.log(course.tutor.name);
~~~

### Object methods

A method is a function stored as an object's property:

~~~js
const user = {
    name: "Alex",
    introduce() {
        return "Hello, I am " + this.name + ".";
    }
};

console.log(user.introduce());
~~~

In this call, **this** refers to the object that receives the method call. Do not use an arrow function as a direct replacement for this method: arrow functions do not create their own **this** binding.

## 5. Arrays of objects

It is common to store several records as objects inside an array:

~~~js
const products = [
    { name: "Notebook", price: 45, available: true },
    { name: "Pencil", price: 8, available: false },
    { name: "Backpack", price: 350, available: true }
];
~~~

Access a property by combining an index and dot notation:

~~~js
console.log(products[0].name); // Notebook
~~~

Array methods also work with objects:

~~~js
const availableItems = products.filter((product) => product.available);
const names = products.map((product) => product.name);
const backpack = products.find((product) => product.name === "Backpack");
~~~

The parameter **product** represents the current item during each iteration. Its name can change, but it should describe what it contains.

## 6. Basic destructuring

Destructuring extracts values from an array or object:

~~~js
const coordinates = [10, 25];
const [x, y] = coordinates;

const person = { name: "Mara", age: 17 };
const { name, age } = person;

console.log(x, y);
console.log(name, age);
~~~

Object destructuring variable names must match property names unless you use an alias.

## 7. Variable scope

Scope tells you which part of a program can use a variable.

### Global scope

A variable declared outside functions and blocks may be available throughout the same context:

~~~js
const courseName = "JavaScript";

function showCourse() {
    console.log(courseName);
}

showCourse();
~~~

Avoid filling the global namespace. Prefer declaring data close to the code that uses it.

### Function scope

A variable declared inside a function exists only inside that function:

~~~js
function calculateTotal() {
    const subtotal = 100;
    return subtotal * 1.16;
}

console.log(calculateTotal());
// console.log(subtotal); // ReferenceError
~~~

To use a result outside the function, return it with **return**.

### Block scope

**let** and **const** respect blocks delimited by braces:

~~~js
if (true) {
    const message = "Inside the block";
    console.log(message);
}

// message is not available here.
~~~

A variable declared inside a block should not be used outside it. If you need the value later, declare it in the appropriate scope and assign it when needed.

### Variable shadowing

An inner block can declare a variable with the same name as one in an outer block:

~~~js
const level = "outer";

if (true) {
    const level = "inner";
    console.log(level); // inner
}

console.log(level); // outer
~~~

These are different variables. Avoid overusing this technique because it can make code harder to read.

## 8. Debugging

Debugging means finding and fixing the cause of a problem, not changing random lines until the problem disappears.

### Recommended process

1. Reproduce the problem with the same data.
2. Read the complete error message.
3. Identify the file and line mentioned.
4. Check values before the failing operation.
5. Test one hypothesis at a time.
6. Run the program again with the original case and other values.

### Useful console messages

~~~js
const quantity = 3;
const price = 25;

console.log("Quantity:", quantity);
console.table([{ quantity, price }]);
console.warn("Review notice");
console.error("Example error message");
~~~

**console.log()** displays values, **console.table()** presents tabular data, and **console.warn() / console.error()** help distinguish notices and errors.

### Common errors

| Error | What it usually indicates |
|---|---|
| ReferenceError | A name was used when it was not available in that scope |
| TypeError | An operation was attempted that the value does not allow |
| SyntaxError | The code does not follow the language syntax |
| undefined | A missing property, out-of-range index, or function without return was read |

### Pause execution

The **debugger;** statement pauses the program when developer tools are open and the debugger is enabled:

~~~js
const total = 50;
debugger;
console.log(total);
~~~

In a browser or compatible editor, you can add breakpoints, step through the code, and inspect variables. Remove temporary **debugger;** statements when finished.

## 9. Common collection mistakes

- Using index 1 for the first item; the first index is 0.
- Confusing length with the last index; the last index is usually length - 1.
- Thinking map() filters items; map() transforms and filter() selects.
- Expecting forEach() to return an array; its result is undefined.
- Forgetting return inside a map(), filter(), or find() callback.
- Trying to access properties on an undefined value.
- Assuming const makes arrays and objects immutable.
- Trying to use a local variable outside its function or block.

## 10. Practice

Continue with [JS-007 to JS-012](EJERCICIOS/README.en.md). Run each solution, change the data, and check the result. For debugging, start with console.log() and then try breakpoints in developer tools.

## Sources

- [MDN — Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN — Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN — Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)

See also the [Spanish guide](GUIA_ESTRUCTURAS.md).
