# Solution — JS-017

## Expected result

When the form is submitted, a summary with the name, group, and selected shift appears. The page does not navigate to another address or send data to a server.

## Explanation

- The listener is registered on the form through `submit`.
- `preventDefault()` cancels the browser's normal submission.
- `new FormData(form)` collects controls that have a `name` attribute.
- `data.get("name")` retrieves the matching value.
- `textContent` displays the summary as text. The `white-space: pre-line` style preserves line breaks.

To test safe text handling, enter a string such as `<strong>Hello</strong>`. It should appear literally instead of creating an HTML element.

## Files

- [index.html](index.html)
- [app.js](app.js)
