# HTML-010 — Capstone project: learning library

- **Topic:** integration of beginner and intermediate HTML
- **Level:** intermediate
- **Type:** practical project
- **Requirements:** HTML-001 through HTML-009

## Objective

Build a small two-page website that organizes study resources and combines semantic structure, responsive images, tables, forms, and accessibility.

## Prompt

Create a learning library to present programming topics, show a study path, and let a visitor complete a fictional request for academic guidance.

The site will include a home page, a contact page, and a local document embedded inside an iframe.

## Home page requirements

1. Declare the document language, encoding, viewport, description, and title.
2. Link an external icon, CSS stylesheet, and JavaScript file.
3. Add a skip link that jumps directly to the main content.
4. Organize the page with header, nav, main, section, and footer.
5. Add a main image using picture, source, and img.
6. Use srcset and sizes on the main image.
7. Add a secondary image with width, height, alt, and loading="lazy".
8. Create a study-path table using caption, thead, tbody, th, scope, and td.
9. Add a frequently asked questions section with at least three details and summary elements.
10. Include progress to represent sample progress and meter for a measurement within a range.
11. Embed the local recursos.html document using iframe. Include title, dimensions, loading="lazy", and sandbox.
12. Add a link to contacto.html.
13. Use descriptive link text and useful text alternatives for images.

## Contact page requirements

1. Reuse the metadata and main navigation.
2. Create a form with name, email, area of interest, preferred mode, and a description of the request.
3. Associate every control with a label.
4. Use fieldset and legend to group mode options.
5. Define suitable name, id, and input types.
6. Use required and length limits where appropriate.
7. Add a submit button.
8. Explain that the form is a static demonstration and does not save or send requests to a server.

## Restrictions

- Do not use tables to arrange the page layout.
- Do not use placeholder as a replacement for label.
- Do not add real personal data; test with fictional information.
- Do not remove image alt attributes.
- Do not add sandbox permissions without explaining why they are needed.
- Do not claim that the form stores data.
- Keep HTML, CSS, and JavaScript in separate files.

## Suggested structure

~~~text
HTML-010/
├── index.html
├── contacto.html
├── recursos.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
└── assets/
    ├── favicon.svg
    ├── portada-horizontal-480.svg
    ├── portada-horizontal-960.svg
    ├── portada-vertical.svg
    └── tarjeta.svg
~~~

## Acceptance criteria

| Area | It is correct when... |
|---|---|
| Metadata | Both pages have language, charset, viewport, description, and title. |
| Navigation | In-page and page-to-page links work. |
| Semantics | Elements are used according to their purpose. |
| Images | picture, srcset, sizes, alt, width, and height are used correctly. |
| Table | Headers identify rows and columns. |
| Form | Controls have labels and native validation. |
| Interaction | details works and indicators have valid values. |
| Iframe | It loads the local document and has title and sandbox. |
| Resources | CSS, JavaScript, and icon paths work. |
| Accessibility | The site is keyboard navigable and understandable without relying only on images or color. |

## Starter files

Complete the files in the [HTML-010](HTML-010/) folder.

## Submission

Keep the project with all local resources. Check both pages in a browser and review the markup with the [Nu HTML Checker](https://validator.w3.org/nu/).

## Solution

After completing your version, see [SOLUCIONES/HTML-010](../SOLUCIONES/HTML-010/).

## Self-assessment

- [ ] I can explain the purpose of each semantic element I used.
- [ ] I can explain how picture works with srcset and sizes.
- [ ] I can justify using th, scope, and caption.
- [ ] I can explain how label, id, and name are related.
- [ ] I know why a form does not store data by itself.
- [ ] I can explain what sandbox restricts in an iframe.
- [ ] I tested links and controls with a keyboard.
- [ ] I checked the document with a validator.

## Sources

- [MDN — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN — HTML accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- [MDN — Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN — Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)
