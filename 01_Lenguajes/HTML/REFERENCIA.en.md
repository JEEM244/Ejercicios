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
