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
