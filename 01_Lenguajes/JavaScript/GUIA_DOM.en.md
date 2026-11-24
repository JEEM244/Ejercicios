# JavaScript Guide: DOM and Events

**Level:** beginner-intermediate.  
**Prerequisites:** [fundamentals](GUIA.en.md) and [data structures](GUIA_ESTRUCTURAS.en.md).  
**Goal:** connect JavaScript with HTML to select elements, update a page, and respond to user actions.

## 1. What is the DOM?

The DOM (*Document Object Model*) is the browser's tree-like representation of an HTML document. JavaScript can query that tree and modify elements, text, attributes, and classes.

Example HTML:

~~~html
<h1 id="title">My page</h1>
<p class="status">Ready</p>
~~~

The browser creates objects for these elements. JavaScript can find them and work with them.

**Important:** the browser DOM is not available globally in Node.js. A file that uses `document` must run in a web page or in an environment that implements the DOM.

## 2. Connect JavaScript to HTML

Keep JavaScript in a separate file:

~~~html
<script src="app.js" defer></script>
~~~

The `defer` attribute lets the browser parse the HTML before executing the external file. This allows the script to find elements declared in the document.

Do not mix JavaScript code into HTML attributes such as `onclick="..."`. Events are easier to maintain and review when registered from the JavaScript file.

## 3. Select elements

### By ID

~~~js
const title = document.getElementById("title");
~~~

Returns the element with that ID or `null` when it does not exist.

### With CSS selectors

~~~js
const firstNotice = document.querySelector(".notice");
const button = document.querySelector("#save");
~~~

`querySelector()` returns the first match or `null`.

### Select multiple elements

~~~js
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    console.log(button.textContent);
});
~~~

`querySelectorAll()` returns a node list that can be iterated with `forEach()`. The list represents matches at the time of the query; query again when you need to include elements added later.

### Check that an element exists

~~~js
const message = document.querySelector("#message");

if (message !== null) {
    console.log(message.textContent);
}
~~~

An incorrect selector or a missing ID may produce `null`. Trying to use a property of `null` causes a `TypeError`.

## 4. Read and update content

### Visible text

~~~js
const title = document.querySelector("#title");

title.textContent = "Learning dashboard";
~~~

`textContent` reads or changes an element's text. When you assign a string, it is displayed as text.

### Form controls

~~~js
const name = document.querySelector("#name");

console.log(name.value);
name.value = "Mara";
~~~

The `value` property contains the current value of controls such as `input`, `textarea`, and `select`.

### CSS classes

~~~js
const card = document.querySelector(".card");

card.classList.add("active");
card.classList.remove("hidden");
card.classList.toggle("selected");
~~~

- `add()`: adds a class.
- `remove()`: removes a class.
- `toggle()`: adds the class if absent or removes it if present.
- `contains()`: checks whether the class is present.

### Attributes

~~~js
const link = document.querySelector("a");

link.setAttribute("href", "https://developer.mozilla.org/");
console.log(link.getAttribute("href"));
~~~

Use a specific property when available, such as `input.value`; use `getAttribute()` and `setAttribute()` to read or change HTML attributes.

## 5. Create and remove elements

To build content from data, create nodes and add text as text:

~~~js
const list = document.querySelector("#list");
const item = document.createElement("li");

item.textContent = "Practice JavaScript";
list.append(item);
~~~

To remove an element:

~~~js
item.remove();
~~~

This pattern lets you create lists, messages, and cards without writing HTML inside a string.

**Avoid inserting user-entered data with `innerHTML`.** When displaying text from an input, use `textContent`. Inserting untrusted strings as HTML can create vulnerabilities. These exercises do not require `innerHTML`.

## 6. Events

An event represents something that happens, such as a click, key press, or form submission. You can register a function to respond:

~~~js
const button = document.querySelector("#greet");

button.addEventListener("click", (event) => {
    console.log("Clicked");
    console.log(event.type);
});
~~~

`addEventListener()` receives the event name and the function to execute. The function receives an object containing event information.

### Common events

| Event | When it occurs |
|---|---|
| `click` | When an element is activated by click or keyboard as appropriate |
| `input` | When a field's value changes while typing |
| `change` | When a control commits a value change |
| `submit` | When a form submission is attempted |
| `keydown` | When a key is pressed |
| `focus` | When a control receives focus |
| `blur` | When a control loses focus |

### The event object

~~~js
button.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
});
~~~

- `target`: the element where the event originated.
- `currentTarget`: the element whose listener is currently running.

They are not always the same element.

### Cancel the default action

~~~js
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("JavaScript will handle the submission");
});
~~~

`preventDefault()` cancels the event's default action. It does not remove the event or stop its propagation by itself.

`stopPropagation()` has a different purpose: it prevents the event from continuing to other elements. Do not use it as a replacement for `preventDefault()`.

## 7. Forms

Listen for the form's `submit` event, not only for the button click. This also covers submissions initiated from the keyboard.

~~~html
<form id="form">
    <label for="name">Name</label>
    <input id="name" name="name" required>
    <button type="submit">Send</button>
</form>
<p id="result" aria-live="polite"></p>
~~~

~~~js
const form = document.querySelector("#form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");

    result.textContent = "Hello, " + name;
});
~~~

`FormData` reads controls that have a `name` attribute. `preventDefault()` is useful when an exercise processes the form locally and should not navigate or send data to a server.

### HTML validation

HTML provides built-in validation with attributes such as:

- `required`: requires a value.
- `minlength` and `maxlength`: limit text length.
- `type="email"`: checks a basic email format.
- `min` and `max`: limit numeric values or dates depending on the control.

From JavaScript, you can check `form.checkValidity()` and ask the browser to display messages with `form.reportValidity()`.

Browser validation improves the user experience, but a server must validate received data again. Browser checks do not replace server-side validation.

## 8. Accessibility when working with the DOM

- Use real buttons for actions and real links for navigation.
- Associate each `label` with its control using `for` and `id`.
- Do not communicate status through color alone.
- Use `aria-live` for dynamic notices that should be announced by assistive technologies.
- Keep keyboard focus in a logical place.
- Do not use a `div` as an improvised button.

## 9. Common errors

| Problem | Possible cause | What to check |
|---|---|---|
| `Cannot read properties of null` | The selector did not find the element | ID, class, and execution timing |
| Button does nothing | Listener not registered or wrong selector | Console and connected JavaScript file |
| Text does not change | Wrong property or element was updated | `textContent`, selector, and value |
| Form reloads the page | Default submission was not canceled | `submit` listener and `preventDefault()` |
| Works only with mouse click | A non-interactive element was used | Native button or HTML control |
| Entered text is interpreted as markup | It was inserted as HTML | Display it with `textContent` |

## 10. Practice

Complete [JS-013 to JS-018](EJERCICIOS/README.en.md). Each exercise includes starter HTML and JavaScript. Open `index.html` in a browser to test it. Node.js alone does not provide `document` or browser elements.

## Sources

- [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — DOM events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)
- [MDN — EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [MDN — Form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)

See also the [Spanish guide](GUIA_DOM.md).
