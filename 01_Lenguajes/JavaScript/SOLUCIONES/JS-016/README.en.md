# Solution — JS-016

## Expected result

Each submission with text creates a new list item. Empty values or values made only of whitespace do not create items.

## Explanation

1. The listener is registered on the form using the \`submit\` event.
2. \`preventDefault()\` prevents the browser from reloading the page.
3. \`trim()\` removes whitespace from the beginning and end of the text.
4. \`createElement("li")\` creates a new node.
5. \`textContent\` sets the text without parsing it as HTML.
6. \`append()\` adds the node to the end of the list.

At the end, \`value\` clears the field and \`focus()\` lets the user enter the next task.

## Files

- [index.html](index.html)
- [app.js](app.js)
