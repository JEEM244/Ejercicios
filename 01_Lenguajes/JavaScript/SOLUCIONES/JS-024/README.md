# Solución — JS-024

## Resultado esperado

Al pulsar el botón, la página consulta el archivo JSON local y crea un elemento de lista por cada tarea. También presenta el estado de cada una.

## Explicación

1. El listener del botón se declara como función asíncrona.
2. \`cargarTareas()\` solicita el archivo con \`fetch()\`.
3. Se comprueba \`respuesta.ok\` para detectar estados HTTP de error.
4. \`respuesta.json()\` lee y convierte el cuerpo.
5. \`Array.isArray()\` comprueba que se recibió una lista.
6. Se crea un \`li\` por registro y se asigna el contenido mediante \`textContent\`.
7. \`try...catch...finally\` permite mostrar errores y habilitar de nuevo el botón.

La ruta es relativa al documento HTML y el archivo debe servirse mediante HTTP.

## Ejecución

Coloca la carpeta dentro de la raíz pública de Apache/XAMPP o inicia un servidor desde la carpeta del ejercicio:

~~~bash
python -m http.server 8000
~~~

Abre la URL local del servidor y navega hasta esta carpeta. No abras el HTML directamente con \`file://\`.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
- [tareas.json](datos/tareas.json)

El ejercicio solo carga datos locales. No se conecta a un servicio externo ni almacena información.
