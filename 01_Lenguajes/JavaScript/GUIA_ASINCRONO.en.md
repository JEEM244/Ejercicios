# JavaScript Guide: Modules and Asynchronous Programming

**Level:** early intermediate.  
**Prerequisites:** fundamentals, functions, objects, arrays, and the DOM.  
**Goal:** split code into modules, exchange JSON data, and work with operations that finish after they start.

## 1. Why split code?

As a program grows, keeping everything in one file becomes difficult. We can separate responsibilities:

- One file calculates or transforms data.
- Another manages the interface.
- Another retrieves information.

Modules let us reuse functions and keep each file focused on a task.

## 2. Export and import

A module can share functions, variables, or classes with `export`. Another file can reuse them with `import`.

### Named exports

File `operations.js`:

~~~js
export function add(a, b) {
    return a + b;
}

export const TAX = 0.16;
~~~

File `app.js`:

~~~js
import { add, TAX } from "./operations.js";

console.log(add(100, 50));
console.log(TAX);
~~~

The imported name must match the exported name. Braces identify named exports.

### Default export

A module can have one default export:

~~~js
// greeting.js
export default function greet(name) {
    return "Hello, " + name;
}
~~~

Import it without braces:

~~~js
import greet from "./greeting.js";

console.log(greet("Mara"));
~~~

A module can combine named and default exports, but it can only have one default export.

### Import from HTML

To load a file as a browser module:

~~~html
<script type="module" src="app.js"></script>
~~~

Modules run in their own scope and automatically use strict mode. `import` and `export` declarations are written at the top level of a module. Browsers load module scripts as deferred scripts, so you normally do not need to add `defer`.

### Module paths

Use relative paths that begin with `./` or `../`:

~~~js
import { add } from "./modules/operations.js";
~~~

The path is resolved relative to the file containing the `import`, not relative to the HTML file that opened the page.

**Important:** test modules through a local HTTP server. Opening HTML directly with `file://` may prevent the browser from loading modules because of origin restrictions.

## 3. JSON: exchanging data

JSON (*JavaScript Object Notation*) is a text format used to exchange data. It resembles JavaScript objects, but it has its own rules.

Example:

~~~json
{
    "name": "Mara",
    "group": "5L1",
    "active": true,
    "subjects": ["Programming", "Databases"]
}
~~~

### Convert an object to text

~~~js
const student = {
    name: "Mara",
    group: "5L1"
};

const text = JSON.stringify(student);
console.log(text);
~~~

`JSON.stringify()` converts a JSON-compatible value into text. It can receive options to add indentation:

~~~js
const prettyText = JSON.stringify(student, null, 2);
~~~

### Convert text into a value

~~~js
const text = '{"name":"Mara","group":"5L1"}';
const student = JSON.parse(text);

console.log(student.name);
~~~

`JSON.parse()` converts valid JSON text into a JavaScript value. It throws an error when the text is malformed, so use `try...catch` when the content is not under your control:

~~~js
try {
    const data = JSON.parse(receivedText);
    console.log(data);
} catch (error) {
    console.error("The text is not valid JSON.");
}
~~~

JSON supports objects, arrays, strings, numbers, booleans, and `null`. It does not support functions or comments. Do not confuse a JavaScript object with a JSON string: they are different types.

## 4. Synchronous and asynchronous code

Synchronous code advances one statement at a time. An asynchronous operation can start work and let the rest of the program continue while it waits for a result.

Examples of asynchronous operations:

- Reading information from a server.
- Waiting for a timer.
- Requesting files from a web application.
- Waiting for an API response.

This does not mean JavaScript runs everything at exactly the same time. It means the result is handled when the operation finishes.

## 5. Promises

A promise represents the future result of an asynchronous operation. It has three states:

- **pending:** it has not finished yet.
- **fulfilled:** it completed successfully.
- **rejected:** it failed.

### Create a promise

~~~js
const task = new Promise((resolve, reject) => {
    const successful = true;

    if (successful) {
        resolve("The task completed");
    } else {
        reject(new Error("The task failed"));
    }
});
~~~

`resolve()` fulfills the promise and `reject()` rejects it. A promise can settle only once.

### Consume a promise

~~~js
task
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("The operation finished");
    });
~~~

- `then()`: handles the successful result.
- `catch()`: handles a rejection or error in the chain.
- `finally()`: runs when the operation finishes, whether it fulfills or rejects.

Each `then()` returns a new promise. If a function inside `then()` returns another promise, the chain waits for its result.

Do not leave errors unhandled. A `catch()` placed too early can hide an error and allow the program to continue with a value that does not exist.

## 6. async and await

Functions declared with `async` always return a promise. `await` lets you wait for a promise inside an asynchronous function.

~~~js
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function start() {
    console.log("Start");
    await wait(1000);
    console.log("One second passed");
}

start();
~~~

The pause occurs inside that function. It does not block the entire browser or stop other program tasks.

### Handle errors with try...catch

~~~js
async function loadData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.error("Could not load data:", error.message);
    } finally {
        console.log("Request finished");
    }
}
~~~

Use `try...catch` when you need to handle errors from an expected operation. The `finally` block is useful for hiding a loading indicator or restoring a button.

### Run several tasks

If several operations do not depend on one another, start them together with `Promise.all()`:

~~~js
const [students, subjects] = await Promise.all([
    loadStudents(),
    loadSubjects()
]);
~~~

`Promise.all()` fulfills when all promises fulfill and rejects if any of them fails. Do not wait for one operation before starting another when there is no dependency between them.

## 7. Fetch API

`fetch()` makes HTTP requests from the browser and returns a promise with a `Response` object.

~~~js
async function loadFile() {
    const response = await fetch("./data/students.json");

    if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
    }

    const students = await response.json();
    console.log(students);
}
~~~

The process has several steps:

1. `fetch()` requests the resource.
2. The response includes an HTTP status.
3. Check `response.ok`.
4. `response.json()` reads and parses the response body.
5. Use the received data.

**Do not skip the `ok` check.** An HTTP response such as 404 does not automatically reject the `fetch()` promise; you must check the status.

### Handle fetch errors

~~~js
async function loadFile() {
    try {
        const response = await fetch("./data/students.json");

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        const students = await response.json();
        return students;
    } catch (error) {
        console.error("Could not load the file:", error.message);
        throw error;
    }
}
~~~

The `json()` method is also asynchronous and may fail if the body does not contain valid JSON.

### Fetch and local servers

To test `fetch()` with a JSON file in the project, open the page from a local HTTP server, not from the file explorer. You can use Apache/XAMPP, a development server, or Python's server:

~~~bash
python -m http.server 8000
~~~

Then open the local address provided by the server and navigate to the exercise folder. If the server cannot find the file, check the path and the directory from which the server was started.

Requests to other domains may be subject to CORS. Do not try to bypass it with `mode: "no-cors"`: that option does not let you normally read an opaque response body.

## 8. Common errors

| Problem | Possible cause | What to check |
|---|---|---|
| `Cannot use import statement outside a module` | The script was not loaded as a module | `type="module"` and the environment |
| `Failed to resolve module specifier` | Incorrect path or filename | Extension and relative path |
| Invalid JSON | Incorrect quotes, commas, or structure | Validate the text and use try/catch |
| Promise result does not appear | Missing `then()` or `await` | Where the promise is consumed |
| Unhandled error | Missing `catch()` or try/catch | The full asynchronous chain |
| Fetch returns 404 | Resource not found | URL and `response.ok` |
| Fetch fails from file:// | The page was opened as a file | Use a local HTTP server |
| The result is a promise | Its value was not awaited | Use `await` or `then()` |

## 9. Practice

Complete [JS-019 to JS-024](EJERCICIOS/README.en.md). Exercises JS-019 and JS-020 use browser modules; JS-021 to JS-023 can run with Node.js; JS-024 requires a local HTTP server to load the JSON file.

## Sources

- [MDN — JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN — Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN — Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN — JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

See also the [Spanish guide](GUIA_ASINCRONO.md).
