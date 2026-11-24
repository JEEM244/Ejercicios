# HTML quick reference

## Minimal structure

~~~html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page title</title>
</head>
<body>
    <!-- Content -->
</body>
</html>
~~~

## Text and structure elements

| Element | Purpose |
|---|---|
| h1–h6 | Headings |
| p | Paragraph |
| strong | Importance |
| em | Emphasis |
| ul, ol, li | Lists |
| a | Link |
| img | Image |
| header, nav, main | General structure |
| section, article, aside, footer | Semantic sections |
| div, span | Generic containers |

## Tables

| Element | Purpose |
|---|---|
| table | Table |
| caption | Title or description |
| thead | Table header |
| tbody | Data rows |
| tfoot | Summary or footer |
| tr | Row |
| th | Header cell |
| td | Data cell |

Related attributes:

- scope="col": column header.
- scope="row": row header.
- colspan: number of columns a cell spans.
- rowspan: number of rows a cell spans.

Example:

~~~html
<table>
    <caption>Subjects</caption>
    <thead>
        <tr>
            <th scope="col">Subject</th>
            <th scope="col">Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Programming</th>
            <td>95</td>
        </tr>
    </tbody>
</table>
~~~

## Forms

| Element | Purpose |
|---|---|
| form | Groups controls |
| label | Descriptive label |
| input | Input control |
| textarea | Multi-line text |
| select, option | Options list |
| button | Button |
| fieldset, legend | Group and name controls |

Common input types:

- text
- email
- password
- number
- date
- checkbox
- radio
- file
- submit
- search
- tel
- url

Common attributes:

| Attribute | Purpose |
|---|---|
| id | Control identifier |
| name | Name of submitted value |
| value | Control value |
| type | Input type |
| required | Required field |
| placeholder | Hint text |
| min, max, step | Limits and increment |
| minlength, maxlength | Text length limits |
| for | Connects a label to a control id |
| action | Form submission destination |
| method | HTTP method used for submission, such as GET or POST |

Example:

~~~html
<form action="/register" method="post">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Submit</button>
</form>
~~~

## Audio and video

| Element | Purpose |
|---|---|
| audio | Audio player |
| video | Video player |
| source | Alternative resource file |
| track | Subtitles, captions, or text tracks |

Common attributes:

- controls: displays player controls.
- width and height: video dimensions.
- autoplay: requests automatic playback; avoid it with sound.
- muted: starts media without sound.
- loop: repeats media.

Example:

~~~html
<video controls width="640">
    <source src="video/guide.mp4" type="video/mp4">
    <track kind="captions" src="video/guide-en.vtt" srclang="en" label="English">
    Your browser cannot play this video.
</video>
~~~

## Common global attributes

| Attribute | Purpose |
|---|---|
| id | Unique identifier in the document |
| class | Groups elements |
| lang | Content language |
| title | Additional information |
| hidden | Hides the element |
| tabindex | Keyboard focus participation and order |

## Validation and accessibility

- Connect labels and controls using for and id.
- Use alt for informative images.
- Use caption and th for data tables.
- Keep a logical heading order.
- Check keyboard navigation.
- Use [Nu HTML Checker](https://validator.w3.org/nu/) to review markup.

Automated validation does not replace accessibility testing or manual review.

## References

- [MDN — HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN — Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — Table accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [MDN — Audio and video](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Nu HTML Checker](https://validator.w3.org/nu/)


## Metadata and resources

| Element | Purpose |
|---|---|
| meta name="description" | Page description |
| link rel="icon" | Page icon |
| link rel="stylesheet" | External stylesheet |
| script src | External JavaScript file |
| noscript | Fallback content when scripts are unavailable |
| base | Base URL for resolving relative paths; use carefully |

### Script loading

| Form | Behavior |
|---|---|
| script without attributes | May block HTML parsing while loading and executing |
| script defer | Executes after HTML parsing and preserves order |
| script async | Executes when downloaded; order is not guaranteed |
| script type="module" | Uses modules and is deferred by default |

## Global attributes

| Attribute | Purpose |
|---|---|
| id | Unique identifier |
| class | Reusable group |
| lang | Language |
| dir | Text direction: ltr or rtl |
| title | Advisory information |
| hidden | Hides the element |
| tabindex | Focus order; usually 0 or -1 |
| contenteditable | Allows editing page content |
| spellcheck | Spelling check |
| data-* | Custom non-sensitive data |

Boolean attributes are enabled by their presence. Writing hidden="false" does not disable it; remove the attribute instead.

## Responsive images

- src: fallback image.
- srcset: image candidates.
- sizes: expected image width in context.
- picture: supports an alternative composition.
- source: defines a source inside picture, audio, or video.
- width and height: intrinsic dimensions.
- loading="lazy": deferred loading.
- decoding="async": asynchronous decoding hint.

## Embedded content

| Element or attribute | Purpose |
|---|---|
| figure | Groups self-contained content |
| figcaption | Figure caption |
| iframe | Embeds another document |
| title on iframe | Describes embedded content |
| sandbox | Restricts embedded document capabilities |
| loading="lazy" | Defers loading when appropriate |

## Interactive and status elements

| Element | Purpose |
|---|---|
| details | Expandable region |
| summary | Interactive heading for details |
| dialog | Dialog box |
| progress | Task progress |
| meter | Measurement within a range |

dialog can be opened non-modally using the open attribute. Opening it as a modal dialog from a button normally uses JavaScript and showModal().

## Additional references

- [MDN — Document metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
- [MDN — Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes)
- [MDN — script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [MDN — Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN — iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [MDN — details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
- [MDN — dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
