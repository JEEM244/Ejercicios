# Quick Reference: Modules and Asynchronous Code

See the [modules and asynchronous programming guide](GUIA_ASINCRONO.en.md) for full explanations.

## Modules

Load from HTML:

~~~html
<script type="module" src="app.js"></script>
~~~

Named export:

~~~js
export const TAX = 0.16;
export function add(a, b) {
    return a + b;
}
~~~

Named import:

~~~js
import { TAX, add } from "./operations.js";
~~~

Default export:

~~~js
export default function greet(name) {
    return "Hello " + name;
}
~~~

Default import:

~~~js
import greet from "./greeting.js";
~~~

Use relative paths such as `./module.js`. Test modules through a local HTTP server.

## JSON

~~~js
const text = JSON.stringify({ name: "Mara" }, null, 2);
const object = JSON.parse(text);
~~~

- `JSON.stringify()`: JavaScript value → JSON text.
- `JSON.parse()`: JSON text → JavaScript value.

Both may require error handling; `JSON.parse()` throws when the text is invalid.

## Promises

~~~js
task
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message))
    .finally(() => console.log("Finished"));
~~~

States: pending, fulfilled, and rejected.

## async / await

~~~js
async function request() {
    try {
        const result = await getData();
        return result;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}
~~~

An `async` function returns a promise. `await` waits for the result inside an asynchronous function or a module.

## Multiple promises

~~~js
const [users, products] = await Promise.all([
    loadUsers(),
    loadProducts()
]);
~~~

`Promise.all()` rejects if one of its promises rejects.

## Fetch

~~~js
async function loadJSON(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error("HTTP " + response.status);
    }

    return await response.json();
}
~~~

Check `response.ok`: an HTTP 404 response does not automatically reject `fetch()`.

## Sources

- [MDN — Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN — Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN — Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

See also the [Spanish reference](REFERENCIA_ASINCRONO.md).
