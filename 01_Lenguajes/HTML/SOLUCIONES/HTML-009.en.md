# Solution: HTML-009 — Native interactive content

**Status:** reviewed for structure; no automated validator was run.

## Idea

The exercise uses elements that already include native browser behavior. details expands answers; dialog displays a notice; progress and meter represent different kinds of values.

## File

[HTML-009.html](HTML-009.html)

## Important decisions

- summary is the first child of each details element.
- The open attribute makes the first block expanded at page load.
- dialog with open is displayed as a non-modal dialog.
- form method="dialog" closes the dialog when submitted.
- progress represents task progress.
- meter represents a measurement within a range.
- label provides a name for each indicator.

## Review

- [x] Three details blocks exist.
- [x] One starts open.
- [x] The dialog can be closed.
- [x] The indicators have labels.
- [ ] Test the interaction in a browser.
