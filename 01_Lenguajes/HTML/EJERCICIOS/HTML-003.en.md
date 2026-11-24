# HTML-003 — Build a semantic page with navigation

- **Topic:** semantics and in-page links
- **Level:** beginner
- **Type:** build a page from scratch
- **Requirements:** review HTML-001 and HTML-002 first

## Objective

Use semantic elements to organize information and create navigation between sections on the same page.

## Prompt

Create an informational page about a technology that interests you. It can be HTML, CSS, JavaScript, Python, or a database.

## Requirements

1. Add a header with a title and a short introduction.
2. Create a nav with links to the "Concepts" and "Resources" sections.
3. Place the main content inside main.
4. Create a section with id="concepts", a heading, and an explanation.
5. Inside that section, add an article with a subheading and a short example written in your own words.
6. Create a section with id="resources" and a list containing two external documentation links.
7. Add a footer with a note about the practice.
8. Check that each in-page link points to the correct id.

## Restrictions

- Do not add CSS or JavaScript.
- Do not use div as a replacement for all semantic elements.
- External links must have text that describes their destination.
- Do not choose elements only for their appearance.

## Expected result

When the page is opened in a browser, it should display an article with navigation at the top. Menu links should move the page to the corresponding section.

## Review cases

| Check | Expected result |
|---|---|
| Structure | header, nav, main, and footer exist. |
| Sections | The concepts and resources IDs exist. |
| Navigation | Each in-page link points to an existing section. |
| Article | An article with a heading and explanation exists. |
| Resources | Two external links have descriptive text. |
| Semantics | Elements represent the purpose of their content. |

## Starter file

Continue from [HTML-003.html](HTML-003.html).

## Hints

<details>
<summary>Show hint 1</summary>

An in-page link can be written with the # symbol followed by the value of its id.

</details>

<details>
<summary>Show hint 2</summary>

A thematic section can use section, and self-contained content can be placed inside article.

</details>

## Solution

After trying the exercise, see [SOLUCIONES/HTML-003.html](../SOLUCIONES/HTML-003.html).

## Sources

- [MDN — HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)
