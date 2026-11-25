# Solution — JS-024

## Expected result

When the button is pressed, the page requests the local JSON file and creates one list item for every task. It also displays each task's status.

## Explanation

1. The button listener is declared as an asynchronous function.
2. \`loadTasks()\` requests the file with \`fetch()\`.
3. \`response.ok\` is checked to detect HTTP error statuses.
4. \`response.json()\` reads and parses the body.
5. \`Array.isArray()\` checks that a list was received.
6. An \`li\` is created for each record and its content is assigned with \`textContent\`.
7. \`try...catch...finally\` displays errors and enables the button again.

The path is relative to the HTML document and the file must be served over HTTP.

## Run

Place the folder inside Apache/XAMPP's public root or start a server from the exercise folder:

~~~bash
python -m http.server 8000
~~~

Open the local server URL and navigate to this folder. Do not open the HTML directly with \`file://\`.

## Files

- [index.html](index.html)
- [app.js](app.js)
- [tareas.json](datos/tareas.json)

The exercise only loads local data. It does not connect to an external service or store information.
