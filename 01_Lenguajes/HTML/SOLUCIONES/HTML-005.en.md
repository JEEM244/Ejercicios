# Solution: HTML-005 — Registration form

**Status:** reviewed for structure; not connected to a server.

## Idea

Each control uses a label associated through for and id. The name attributes identify the values that would be submitted, and required enables basic browser validation.

## File

[HTML-005.html](HTML-005.html)

## Important decisions

- type="email" checks the basic format of an email address.
- select provides predefined options.
- Both radio buttons share name="nivel", so they form one group.
- fieldset and legend name and group the options.
- textarea allows a longer explanation.
- The form uses a GET submission to the same page as a demonstration. It does not save data or send it to a database.

## Review

- [x] Controls have associated labels.
- [x] Main fields have name attributes.
- [x] Required fields use required.
- [x] Radio options share the same name.
- [ ] Test the form in a browser.
- [ ] In a real application, validate data on the server too.
