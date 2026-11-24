# HTML-009 — Create native interactive content

- **Topic:** details, summary, dialog, progress, and meter
- **Level:** intermediate
- **Type:** build an interactive section

## Objective

Use native HTML elements to display expandable information, notices, and status values.

## Prompt

Create a frequently asked questions section for a study page. Include a notice using dialog and show the progress of a learning path.

## Requirements

1. Add at least three details blocks.
2. Each details must have summary as its first child.
3. Write an answer inside each details block.
4. Use the open attribute on one block so it starts expanded.
5. Add a dialog with open to display a non-modal notice.
6. Inside the dialog, include a form with method="dialog" and a button to close it.
7. Add progress to show task progress.
8. Add meter to represent a measurement within a range.
9. Associate progress and meter with labels using label.

## Restrictions

- Do not simulate disclosure elements with div.
- Do not confuse progress with meter.
- Do not add tabindex to the dialog element.
- Do not claim that dialog opens modally just because it uses open.

## Expected result

The page displays expandable questions, a closable non-modal notice, and two indicators with different meanings.

## Review cases

| Check | Expected result |
|---|---|
| details | At least three blocks exist. |
| summary | It is the first child of each details. |
| open | One block starts expanded. |
| dialog | The notice appears and can be closed. |
| progress | Represents task progress. |
| meter | Represents a measurement within a range. |
| Labels | Each indicator has an associated label. |

## Starter file

Continue from [HTML-009.html](HTML-009.html).

## Solution

After attempting the exercise, see [SOLUCIONES/HTML-009.html](../SOLUCIONES/HTML-009.html).

## Sources

- [MDN — details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
- [MDN — summary element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary)
- [MDN — dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [MDN — progress element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress)
- [MDN — meter element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter)
