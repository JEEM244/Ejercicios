# Quick Reference: DOM and Events

For full explanations and examples, see [GUIA_DOM.en.md](GUIA_DOM.en.md).

## Connect the file

~~~html
<script src="app.js" defer></script>
~~~

## Select elements

~~~js
const byId = document.getElementById("title");
const first = document.querySelector(".card");
const several = document.querySelectorAll("button");
~~~

- \`getElementById("id")\`: element or \`null\`.
- \`querySelector("selector")\`: first match or \`null\`.
- \`querySelectorAll("selector")\`: list of matches.

## Read and update

~~~js
element.textContent = "New text";
field.value = "New value";

element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("selected");

element.setAttribute("aria-label", "Close");
element.getAttribute("aria-label");
~~~

## Create and remove nodes

~~~js
const item = document.createElement("li");
item.textContent = "New task";
list.append(item);

item.remove();
~~~

To display text entered by a person, use \`textContent\`; do not insert it as HTML with \`innerHTML\`.

## Events

~~~js
button.addEventListener("click", (event) => {
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
});
~~~

| Event | Common use |
|---|---|
| click | Activate a button |
| input | Respond while text changes |
| change | Detect a committed change |
| submit | Process a form |
| keydown | Detect a key |
| focus / blur | Receive or lose focus |

## Form

~~~js
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");

    result.textContent = "Hello, " + name;
});
~~~

A control must have a \`name\` attribute to appear in \`FormData\`.

## Native validation

~~~js
if (form.checkValidity()) {
    console.log("Form is valid");
} else {
    form.reportValidity();
}
~~~

Common HTML attributes: \`required\`, \`minlength\`, \`maxlength\`, \`type="email"\`, \`min\`, and \`max\`.

## Event methods

- \`event.preventDefault()\`: cancels the default action.
- \`event.stopPropagation()\`: stops propagation to other elements.

They are not interchangeable.

## Quick troubleshooting

- \`null\`: the selector did not find the element.
- \`TypeError\` while reading a property: check that the element exists.
- The form reloads: check the \`submit\` listener and \`preventDefault()\`.
- Text is interpreted as markup: use \`textContent\`.

## Sources

- [MDN — DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN — Events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)
- [MDN — addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

See also the [Spanish reference](REFERENCIA_DOM.md).
