# HTML — quick reference

Lookup sheet. For detailed explanations and examples, see [GUIA.en.md](GUIA.en.md).

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
    <h1>Main heading</h1>
    <p>A paragraph.</p>
</body>
</html>
~~~

## Common elements

| Element | Purpose |
|---|---|
| html | Root element of the document. |
| head | Metadata and resource references. |
| title | Browser tab title. |
| body | Document content. |
| h1–h6 | Headings at different levels. |
| p | Paragraph. |
| strong | Strong importance. |
| em | Emphasis. |
| ul / ol | Unordered / ordered lists. |
| li | List item. |
| a | Link. |
| img | Image. |
| div | Generic block container with no semantic meaning of its own. |
| span | Generic inline container with no semantic meaning of its own. |

## Semantic structure elements

| Element | Purpose |
|---|---|
| header | Introduction for a page or section. |
| nav | Navigation block. |
| main | Main content. |
| section | Thematic section. |
| article | Independent or reusable content. |
| aside | Indirectly related content. |
| footer | Final information for a page or section. |

## Common attributes

| Attribute | Purpose |
|---|---|
| id | Unique identifier within the document. |
| class | Class name or group for selecting elements. |
| lang | Language of an element's content. |
| title | Advisory information associated with an element. |
| href | Link destination. |
| src | Address or path of an embedded resource. |
| alt | Alternative text for an image. |

## Quick examples

### Link

~~~html
<a href="https://developer.mozilla.org/">MDN documentation</a>
~~~

### Image

~~~html
<img src="images/photo.png" alt="Useful description of the image">
~~~

### List

~~~html
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>
~~~

### In-page link

~~~html
<a href="#contact">Go to contact</a>

<section id="contact">
    <h2>Contact</h2>
</section>
~~~

## Common void elements

They have no content and no closing tag:

- area
- br
- hr
- img
- input
- link
- meta
- source

## Reminders

- Tags do not replace document hierarchy: choose headings based on content level.
- An id must be unique in the document.
- An informative image needs alt text that communicates its content or function.
- Use empty alt text for decorative images that add no information.
- Do not use br to create visual spacing between paragraphs.
- HTML structures content; CSS handles presentation.

## Sources

- [MDN — HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN — Elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)
