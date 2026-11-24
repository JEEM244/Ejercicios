# Solution: HTML-004 — Data table

**Status:** reviewed for structure; no automated validator was run.

## Idea

The first row contains column headers. In each data row, the language name works as a row header. The remaining cells contain data.

## File

[HTML-004.html](HTML-004.html)

## Important decisions

- caption describes the table's purpose.
- thead groups the headers and tbody groups the data rows.
- th identifies header cells.
- scope="col" associates headers with columns.
- scope="row" identifies each row header.
- td contains regular data.

## Review

- [x] The table has a caption.
- [x] Column and row headers are present.
- [x] Cells contain information related to their headers.
- [ ] Check the document with Nu HTML Checker.
