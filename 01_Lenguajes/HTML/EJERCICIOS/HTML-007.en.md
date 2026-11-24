# HTML-007 — Configure metadata and external resources

- **Topic:** metadata, resource links, and script loading
- **Level:** beginner-intermediate
- **Type:** complete and connect files

## Objective

Configure a page's main information and link external CSS and JavaScript files.

## Prompt

Prepare a page named resources.html for a small notes library. The page must describe its content in metadata and load its resources from separate files.

## Requirements

1. Declare English as the document language.
2. Include UTF-8, viewport, a description, and a page title.
3. Link an SVG icon from assets/favicon.svg.
4. Link css/styles.css as the stylesheet.
5. Load js/app.js as an external script using defer.
6. Inside main, add a heading and a paragraph with id="status".
7. The JavaScript file must change the status text to "External JavaScript loaded successfully".
8. Include noscript with an alternative message.
9. Check that relative paths work from the document location.

## Restrictions

- Do not write CSS inside the HTML document.
- Do not write JavaScript inside an onclick attribute.
- Do not use async for this exercise.
- Do not add personal data to metadata.

## Suggested structure

~~~text
HTML-007/
├── resources.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── assets/
    └── favicon.svg
~~~

## Review cases

| Check | Expected result |
|---|---|
| Metadata | Includes charset, viewport, description, and title. |
| Icon | The link element points to favicon.svg. |
| CSS | The external stylesheet is linked. |
| JavaScript | The external script uses defer. |
| Result | The status text changes when the script loads. |
| Fallback | noscript displays an alternative message. |

## Starter file

Continue from [HTML-007.html](HTML-007.html) and complete the CSS and JavaScript files.

## Solution

After attempting the exercise, see [SOLUCIONES/HTML-007.html](../SOLUCIONES/HTML-007.html) and its supporting files.

## Sources

- [MDN — Document metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
- [MDN — script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [MDN — Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes)
