# HTML-006 — Insertar multimedia con alternativas accesibles

- **Tema:** audio, video y accesibilidad
- **Nivel:** básico
- **Tipo:** completar y revisar una página

## Objetivo

Insertar audio y video con controles para el usuario y alternativas textuales.

## Enunciado

Crea una página con un audio de ejemplo y un video corto relacionado con un tema de estudio. Utiliza archivos propios o recursos que tengas permiso para utilizar.

## Requisitos

1. Crea un encabezado que explique el contenido de la página.
2. Inserta un reproductor audio con controls.
3. Inserta un reproductor video con controls y un ancho adecuado.
4. Utiliza source dentro de los reproductores e indica el tipo MIME de cada recurso.
5. Añade un texto alternativo de respaldo dentro de audio y video.
6. Para el video, agrega un track de tipo captions que apunte a un archivo WebVTT en español.
7. Añade un enlace a una transcripción escrita del audio o video.
8. Organiza el contenido dentro de main y utiliza encabezados para cada sección.

## Restricciones

- No actives autoplay.
- No utilices multimedia que no tengas derecho a publicar.
- No dejes información importante comunicada únicamente mediante sonido o imagen.
- Los archivos de audio, video y VTT deben estar disponibles en las rutas indicadas.

## Resultado esperado

La página presenta los controles de reproducción, el video ofrece una pista de subtítulos y existe una transcripción disponible como texto.

## Casos de revisión

| Revisión | Resultado esperado |
|---|---|
| Audio | Existe audio con controls y source. |
| Video | Existe video con controls, source y ancho. |
| Subtítulos | track apunta a un archivo VTT con idioma declarado. |
| Alternativas | Hay una transcripción o alternativa textual. |
| Usabilidad | No se solicita reproducción automática. |
| Estructura | Se utilizan main y encabezados. |

## Archivo inicial

Continúa desde [HTML-006.html](HTML-006.html).

## Solución

Consulta [SOLUCIONES/HTML-006.html](../SOLUCIONES/HTML-006.html) después de intentarlo.

## Pistas

<details>
<summary>Mostrar pista</summary>

El elemento track se coloca dentro de video, después de los elementos source. Un archivo WebVTT comienza con la línea WEBVTT.

</details>

## Fuentes

- [MDN — Audio y video](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [MDN — Elemento track](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track)
- [MDN — Multimedia accesible](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia)
