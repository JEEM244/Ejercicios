# HTML guide: fundamentals and structure

**ID:** HTML-GUIDE-001  
**Area:** HTML  
**Level:** Beginner  
**Status:** In progress

## 1. What is HTML?

HTML stands for *HyperText Markup Language*. It is used to organize page content: headings, paragraphs, links, images, lists, forms, and other parts.

HTML is not mainly responsible for colors or visual layout. That is the role of CSS. JavaScript is used to add logic and interaction.

- **HTML:** what content exists and what it means.
- **CSS:** how it is presented.
- **JavaScript:** how it behaves when users interact with it.

## 2. How an element is built

An element is usually written with an opening tag, content, and a closing tag:

~~~html
<p>I am learning HTML.</p>
~~~

- The opening tag marks where the element begins.
- The text is the content.
- The closing tag marks where the element ends.
- Together, they form a p element.

Elements can also have attributes:

~~~html
<p class="introduction">I am learning HTML.</p>
~~~

Here, class is the attribute and introduction is its value. Attributes are written inside the opening tag.

## 3. A minimal document structure

An HTML file is usually saved with the .html extension. A basic page can start like this:

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
    <p>This is my first HTML page.</p>
</body>
</html>
~~~

| Part | Purpose |
|---|---|
| DOCTYPE | Indicates that the document uses modern HTML. |
| html | The root element; lang declares the main language. |
| head | Contains metadata and resource references. |
| meta charset | Declares character encoding. |
| title | Sets the title displayed in the browser tab. |
| body | Contains the document content. |

Do not confuse head with header: head contains document metadata; header is an introductory section of the content.

## 4. Nested elements

An element can be placed inside another element:

~~~html
<p>This topic is <strong>important</strong>.</p>
~~~

The strong element is inside the paragraph. Elements must close in the correct order and must not overlap.

Keep indentation consistent so it is easy to see which element belongs inside another.

## 5. Void elements

Some elements do not contain text and do not need a closing tag. They are called void elements:

~~~html
<img src="images/logo.png" alt="Project logo">
<br>
<hr>
<meta charset="UTF-8">
~~~

In HTML, img, br, hr, meta, and input are examples of void elements. Do not write a closing tag such as a closing img tag.

## 6. Text and headings

Headings represent titles and subtitles:

~~~html
<h1>Study guide</h1>
<h2>Languages</h2>
<h3>HTML</h3>
~~~

There are six levels, from h1 to h6. Choose a level based on the content hierarchy, not only on the visual size you want. CSS controls appearance.

Use p for normal paragraphs.

## 7. Lists

An unordered list uses ul, and each item uses li:

~~~html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
~~~

An ordered list uses ol:

~~~html
<ol>
    <li>Create the file.</li>
    <li>Write the structure.</li>
    <li>Open it in a browser.</li>
</ol>
~~~

Use the appropriate list element instead of typing bullet characters or numbers manually.

## 8. Links and images

A link uses a and its href attribute:

~~~html
<a href="https://developer.mozilla.org/es/docs/Web/HTML">
    Read the HTML documentation
</a>
~~~

Link text should explain where the link leads. Avoid vague wording such as “click here”.

An image uses img:

~~~html
<img src="images/project.png" alt="Project preview">
~~~

- src specifies the file location.
- alt provides alternative text that communicates the image's purpose or content.
- If an image is purely decorative and adds no information, its alternative text can be empty: alt="".

Do not omit alt without considering what information a person who cannot see the image needs.

## 9. Semantic structure

HTML provides elements whose names describe the role of a document section:

~~~html
<body>
    <header>
        <h1>My site</h1>
    </header>

    <nav>
        <a href="#content">Go to content</a>
    </nav>

    <main id="content">
        <section>
            <h2>Introduction</h2>
            <p>Main page content.</p>
        </section>

        <article>
            <h2>A note</h2>
            <p>Content that can stand on its own.</p>
        </article>
    </main>

    <footer>
        <p>Final site information.</p>
    </footer>
</body>
~~~

Semantic elements describe the purpose of each section. Do not choose them only because the browser gives them a particular appearance.

- header: introductory content for a page or section.
- nav: a group of navigation links.
- main: the main content of the page.
- section: a thematic section, usually with a heading.
- article: independent or reusable content.
- footer: final information for a page or section.

## 10. Common mistakes

| Mistake | Why it is a problem | Better approach |
|---|---|---|
| Forgetting DOCTYPE | The browser may use a compatibility rendering mode. | Put it at the beginning. |
| Not declaring lang | Tools do not receive the document's main language. | Declare the correct page language. |
| Crossing tags | The document hierarchy becomes malformed. | Close elements in reverse order. |
| Choosing headings by size | The content hierarchy is lost. | Choose by level and style with CSS. |
| Using br between paragraphs | A line break is confused with a separate content unit. | Use separate paragraphs. |
| Omitting alt on informative images | Information is lost for people who cannot see them. | Write useful alternative text. |

## 11. Good practices

- Use lowercase tags consistently.
- Indent code and keep elements properly nested.
- Choose elements based on their meaning.
- Declare the document language.
- Provide useful alternative text for images.
- Use descriptive link text.
- Separate structure, presentation, and behavior: HTML, CSS, and JavaScript have different responsibilities.
- Avoid obsolete elements and attributes when a modern alternative exists.

## Sources consulted

- [MDN — Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [MDN — HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN — Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)
