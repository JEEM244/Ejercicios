# HTML guide

**Status:** in development. **Scope:** modern HTML fundamentals and common document structures.

## 1. What is HTML?

HTML (HyperText Markup Language) is a markup language that defines the structure and meaning of web page content. It is not a programming language: it describes what each part of a document represents.

It is used to organize headings, paragraphs, links, images, lists, tables, forms, and other page content.

## 2. Minimal HTML document

~~~html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My first page</title>
</head>
<body>
    <h1>Hello, world</h1>
    <p>I am learning HTML.</p>
</body>
</html>
~~~

### Main parts

- <!doctype html>: enables standards mode for modern HTML.
- html: the root element of the document.
- lang="en": identifies the main language of the content.
- head: contains metadata and resource references.
- meta charset="UTF-8": declares character encoding.
- meta name="viewport": configures the viewport on mobile devices.
- title: sets the browser tab or window title.
- body: contains the document content.

## 3. Elements, tags, and attributes

An element is usually written with an opening tag, content, and a closing tag:

~~~html
<p class="note">This is a paragraph.</p>
~~~

- p is the element name.
- class is an attribute.
- note is the attribute value.
- The text is the content.

Some elements are void elements and do not have closing tags, such as img, br, and meta.

## 4. Text and headings

HTML provides headings from h1 to h6. They should organize content by hierarchy, not be chosen only for their visual size.

~~~html
<h1>Programming guide</h1>
<h2>Web languages</h2>
<h3>HTML</h3>
<p>HTML defines the structure of content.</p>
<strong>Important text</strong>
<em>Emphasized text</em>
~~~

## 5. Lists

Unordered list:

~~~html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
~~~

Ordered list:

~~~html
<ol>
    <li>Create the file</li>
    <li>Write the structure</li>
    <li>Open it in a browser</li>
</ol>
~~~

Each list item is represented by li.

## 6. Links and images

~~~html
<a href="https://developer.mozilla.org/">Visit MDN</a>

<img src="images/logo.png" alt="Project logo">
~~~

- href specifies a link destination.
- src specifies the image resource location.
- alt provides a text alternative for the image.

If an image is purely decorative and adds no information, an empty alt attribute can be used.

## 7. Semantic structure

Semantic elements express the purpose of content:

| Element | Purpose |
|---|---|
| header | Header of a page or section |
| nav | Navigation block |
| main | Main content |
| section | Thematic section |
| article | Independent content |
| aside | Complementary content |
| footer | Footer of a page or section |

Example:

~~~html
<body>
    <header>
        <h1>My site</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>About the project</h2>
            <p>This site is for practicing HTML.</p>
        </article>
    </main>

    <footer>
        <p>Practice project</p>
    </footer>
</body>
~~~

Do not choose an element based on its appearance. HTML provides structure and meaning; CSS handles presentation.

## 8. Tables for data

Tables are for information that is easier to understand by comparing rows and columns, such as schedules, results, or inventories. They should not be used to create the overall layout of a page.

| Element | Purpose |
|---|---|
| table | Table container |
| caption | Table title or short description |
| thead | Groups table header rows |
| tbody | Groups the main data rows |
| tfoot | Groups summary or closing rows |
| tr | Table row |
| th | Header cell |
| td | Data cell |

~~~html
<table>
    <caption>Study schedule</caption>
    <thead>
        <tr>
            <th scope="col">Day</th>
            <th scope="col">Activity</th>
            <th scope="col">Duration</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Monday</th>
            <td>HTML</td>
            <td>40 minutes</td>
        </tr>
        <tr>
            <th scope="row">Tuesday</th>
            <td>CSS</td>
            <td>30 minutes</td>
        </tr>
    </tbody>
</table>
~~~

Header cells th should identify what each row or column represents. The scope attribute indicates whether a header applies to a row or a column. caption provides an understandable name for the table.

The rowspan and colspan attributes let a cell span multiple rows or columns. Use them only when the data structure requires it.

## 9. Forms

A form collects information entered or selected by a user. The form element groups controls and defines how the data is submitted.

~~~html
<form action="/register" method="get">
    <p>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </p>

    <p>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </p>

    <button type="submit">Submit</button>
</form>
~~~

### Main elements

| Element | Purpose |
|---|---|
| form | Groups controls and defines submission |
| label | Describes a control |
| input | Input control with different types |
| textarea | Multi-line text field |
| select | Drop-down list |
| option | An option in a list |
| button | Action button |
| fieldset | Groups related controls |
| legend | Describes a control group |

### Important attributes

- type defines the control type, such as text, email, number, date, checkbox, or radio.
- id identifies the control in the document.
- name determines the name of that value when the form is submitted.
- value sets an initial value or the value to submit.
- required indicates that a control must be completed.
- placeholder displays a hint, but does not replace label.
- min, max, and step set limits or increments on supported controls.
- minlength and maxlength set text length limits on supported fields.

A label can be associated with a control by using for on the label and the same value in the control's id. This is a clear way to keep them connected.

### Grouping options

~~~html
<fieldset>
    <legend>Study mode</legend>

    <input type="radio" id="onsite" name="mode" value="onsite">
    <label for="onsite">On-site</label>

    <input type="radio" id="remote" name="mode" value="remote">
    <label for="remote">Remote</label>
</fieldset>
~~~

Radio controls that belong to one selection share the same name attribute. Checkboxes allow multiple options to be selected.

### Native validation

The browser can check some rules through attributes such as required, type, min, max, minlength, maxlength, and pattern.

This validation improves the user experience, but it does not replace server-side validation. Received data must always be checked by the backend because browser HTML can be modified.

Important: an HTML form does not save or send data to a database by itself. Processing a submission requires a destination and a server-side application.

## 10. Audio and video

HTML can embed audio and video files without necessarily relying on an external player.

~~~html
<audio controls>
    <source src="audio/introduction.mp3" type="audio/mpeg">
    Your browser cannot play this audio.
</audio>

<video controls width="640">
    <source src="video/explanation.mp4" type="video/mp4">
    Your browser cannot play this video.
</video>
~~~

- controls displays player controls.
- source allows one or more files and their MIME types to be listed.
- width can set the initial video width.
- Fallback text inside the element is available in browsers that do not support the player.

For video with dialogue, add subtitles or captions using track and provide a transcript when needed. WebVTT files use the .vtt extension. Do not rely on sound or images alone to communicate important information.

Avoid automatic playback with sound. Let people choose when to play the media.

## 11. Basic HTML accessibility

Accessibility starts with choosing the right elements and writing understandable content.

- Use headings in a logical order.
- Declare the page language with lang.
- Use link text that explains the destination.
- Provide useful alt text for informative images and empty alt text for decorative images.
- Associate every form control with a label.
- Group related options with fieldset and legend.
- Use th and caption to give tables context.
- Check that controls can be reached with the keyboard.
- Do not communicate information only through color, position, sound, or images.
- Provide captions and transcripts for media when appropriate.

Do not add ARIA attributes out of habit. First use the native HTML element that already expresses the required function.

## 12. Validate an HTML document

Validation checks whether markup follows language rules and helps find errors that may affect how the document is interpreted.

A practical review:

1. Open the file in a browser and check that the content appears.
2. Check for missing closing tags, incorrect nesting, and invalid attributes.
3. Check that links and image paths work.
4. Navigate links and controls using Tab and Shift + Tab.
5. Review alternative text and form labels.
6. Use the [Nu HTML Checker](https://validator.w3.org/nu/) to find conformance issues.

A document with no validator errors is not automatically accessible, secure, or easy to use. Keyboard, content, and usability testing are still needed.

## 13. Common mistakes

- Forgetting the doctype declaration.
- Placing visible content inside head.
- Using headings only to change text size.
- Reusing the same id value on multiple elements.
- Omitting alt on informative images.
- Using tables to lay out page sections.
- Creating forms without labels or without name on controls that should be submitted.
- Assuming required replaces server-side validation.
- Adding media without controls or a text alternative.
- Using generic elements when a suitable semantic element exists.

## 14. Good practices

- Keep a clear heading hierarchy.
- Choose elements based on their meaning.
- Quote attribute values.
- Use descriptive file and folder names.
- Provide text alternatives for informative images.
- Associate labels with all form controls.
- Use tables only for tabular data.
- Test forms and navigation with a keyboard.
- Separate structure, presentation, and behavior: HTML, CSS, and JavaScript.

## 15. Continue learning

- [Quick reference](REFERENCIA.en.md)
- [Exercises](EJERCICIOS/README.en.md)

## Sources

- [MDN — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN — Table accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [MDN — HTML forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — Audio and video](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [MDN — HTML and accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- [Nu HTML Checker](https://validator.w3.org/nu/)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)


## 16. Document metadata

Metadata describes information about a page. It is normally placed inside head and does not appear as the main page content.

~~~html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A practical guide to learning HTML.">
    <title>HTML Guide</title>
    <link rel="icon" href="images/favicon.svg" type="image/svg+xml">
</head>
~~~

- charset declares the text encoding.
- viewport helps the page adapt to the device's visible area.
- description provides a summary of the page. Some search engines may use it, but this is not guaranteed.
- title sets the document title.
- link rel="icon" associates an icon with the page.

The base element can set a base URL for resolving relative paths. Use it carefully because it changes how all relative URLs in the document are resolved. For ordinary pages, clear paths without base are usually easier to maintain.

## 17. Global attributes

Global attributes can be used on many HTML elements. Their effect depends on the element and context.

| Attribute | Purpose |
|---|---|
| id | Unique identifier within the document |
| class | Groups elements for styles or scripts |
| lang | Declares the language of the content |
| dir | Sets text direction, such as ltr or rtl |
| title | Adds advisory information |
| hidden | Indicates that the element should not be displayed |
| tabindex | Adjusts how an element participates in keyboard focus |
| contenteditable | Allows content to be edited in the browser |
| spellcheck | Indicates whether spelling may be checked |
| data-* | Stores custom data associated with an element |

~~~html
<article id="html-topic" class="card topic" lang="en" data-level="beginner">
    <h2>Introduction to HTML</h2>
    <p>This article contains the fundamentals.</p>
</article>
~~~

Important rules:

- An id must identify only one element in the document.
- A class can be reused on many elements.
- lang can be set on html and overridden on a part written in another language.
- hidden should not be used to hide important information from specific users.
- For tabindex, 0 and -1 usually cover common cases. Avoid positive values.
- data-* is for custom technical data, not passwords, tokens, or private information.
- contenteditable allows editing in the page but does not automatically save changes to a server.
- title should not replace a visible label or a necessary instruction.

## 18. Loading external CSS and JavaScript

HTML can link external files. CSS defines presentation and JavaScript adds behavior.

~~~html
<head>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/app.js" defer></script>
</head>
~~~

The rel attribute indicates the relationship between the resource and the document; href specifies its path.

With defer, a classic external script downloads while the document is parsed and executes after HTML parsing finishes, before the DOMContentLoaded event. Deferred scripts preserve their document order.

| Form | General behavior |
|---|---|
| script without attributes | May pause HTML parsing while loading and executing |
| script defer | Executes after HTML parsing and preserves order |
| script async | Executes when downloaded; order is not guaranteed |
| script type="module" | Uses JavaScript modules and is deferred by default |

Do not add async or defer to inline scripts without src: those attributes do not control their execution in the same way. Use async only when a script is independent and does not rely on the order of other scripts.

~~~html
<noscript>
    <p>This page provides a basic version without interactive features.</p>
</noscript>
~~~

noscript allows a message or alternative content when scripts are unavailable or disabled.

## 19. Responsive images

An image can have several versions so the browser can choose the most suitable one for the available space and screen.

~~~html
<img
    src="images/photo-960.jpg"
    srcset="images/photo-480.jpg 480w,
            images/photo-960.jpg 960w,
            images/photo-1440.jpg 1440w"
    sizes="(max-width: 600px) 100vw, 700px"
    width="960"
    height="640"
    alt="View of a workspace"
>
~~~

- src specifies a fallback image.
- srcset offers candidate images and their widths.
- sizes tells the browser how much space the image is expected to use.
- width and height communicate its dimensions and help reserve space before it loads.
- alt describes the information or function of the image.

picture can offer different compositions, for example a landscape image for large screens and a portrait image for small screens.

~~~html
<picture>
    <source media="(max-width: 600px)" srcset="images/cover-portrait.jpg">
    <img
        src="images/cover-landscape.jpg"
        width="1200"
        height="675"
        alt="Overview of the project"
    >
</picture>
~~~

The img element is required inside picture and acts as the default option. Keep alternative text on img.

~~~html
<img
    src="images/gallery.jpg"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    alt="Gallery detail"
>
~~~

loading="lazy" allows image loading to be delayed until it is near the visible area. It is useful for images farther down the page, but should not automatically be applied to the main image visible when the page opens. decoding="async" is a hint that the browser may decode the image asynchronously.

## 20. Figures and embedded content

figure groups self-contained content, such as an image, diagram, or example, with an optional description through figcaption.

~~~html
<figure>
    <img src="images/diagram.jpg" alt="Diagram showing the parts of a web page">
    <figcaption>Main parts of a web document.</figcaption>
</figure>
~~~

iframe embeds another document inside the page. Use it only when the external content is needed and trustworthy.

~~~html
<iframe
    src="content/guide.html"
    title="HTML supplementary guide"
    width="600"
    height="300"
    loading="lazy"
    sandbox
></iframe>
~~~

- src specifies the document to embed.
- title explains the frame content to people using assistive technologies.
- width and height set its initial dimensions.
- loading="lazy" can delay loading when it is far from the visible area.
- sandbox applies restrictions to the embedded document.

Do not add sandbox permissions without understanding why the content needs them. Each additional permission reduces restrictions. Also check the external site's policies: some sites do not allow embedding.

## 21. Native interactive elements

details creates a section that can be expanded and collapsed. summary contains the interactive heading text and must be the first child of details.

~~~html
<details>
    <summary>What is HTML?</summary>
    <p>It is a markup language that organizes the content of a page.</p>
</details>
~~~

When the open attribute is added, the content starts expanded.

dialog represents a dialog box. It can be displayed as a non-modal dialog with the open attribute or opened as a modal dialog from JavaScript using showModal().

~~~html
<dialog open>
    <h2>Notice</h2>
    <p>This dialog is open as a non-modal example.</p>
    <form method="dialog">
        <button type="submit">Close</button>
    </form>
</dialog>
~~~

method="dialog" allows the dialog to close when its internal form is submitted. Opening a modal dialog from a button normally requires JavaScript. Do not add tabindex to dialog.

progress represents task progress:

~~~html
<label for="progress">Course progress:</label>
<progress id="progress" max="100" value="65">65%</progress>
~~~

meter represents a measurement within a known range:

~~~html
<label for="level">Skill level:</label>
<meter id="level" min="0" max="10" low="4" high="8" optimum="9" value="7">7 out of 10</meter>
~~~

Do not use progress and meter as if they were the same: one represents task progress and the other a measurement within a range.

## 22. Boolean attributes

Some attributes work through presence or absence. If they appear on an element, they are considered enabled; if they are absent, they are disabled.

Examples include required, disabled, checked, selected, multiple, controls, open, and hidden.

~~~html
<input type="text" required>
<button type="button" disabled>Disabled</button>
<details open>
    <summary>Information</summary>
    <p>Content visible at first.</p>
</details>
~~~

For a boolean attribute, writing open="false" does not disable it: its presence still enables it. Remove the attribute to disable it.

## 23. Final review checklist

- [ ] The document language is declared.
- [ ] Essential metadata is inside head.
- [ ] Titles accurately describe the page and its hierarchy.
- [ ] Links have destinations and descriptive text.
- [ ] Images have alternatives and suitable dimensions.
- [ ] Images that are not near the top are lazy-loaded when appropriate.
- [ ] External resources use correct paths.
- [ ] Forms have labels and server-side validation when they receive data.
- [ ] Embedded frames have a title and limited permissions.
- [ ] Controls can be used with a keyboard.
- [ ] The document has been checked with a validator and a manual review.

## Additional sources

- [MDN — Document metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
- [MDN — Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes)
- [MDN — script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [MDN — Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN — picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)
- [MDN — iframe element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [MDN — details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
- [MDN — dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
