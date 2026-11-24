# Referencia rápida de HTML

## Estructura mínima

~~~html
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título</title>
</head>
<body>
    <!-- Contenido -->
</body>
</html>
~~~

## Elementos de texto y estructura

| Elemento | Función |
|---|---|
| h1–h6 | Encabezados |
| p | Párrafo |
| strong | Importancia |
| em | Énfasis |
| ul, ol, li | Listas |
| a | Enlace |
| img | Imagen |
| header, nav, main | Estructura general |
| section, article, aside, footer | Secciones semánticas |
| div, span | Contenedores genéricos |

## Tablas

| Elemento | Función |
|---|---|
| table | Tabla |
| caption | Título o descripción |
| thead | Encabezado de tabla |
| tbody | Filas de datos |
| tfoot | Resumen o cierre |
| tr | Fila |
| th | Celda de encabezado |
| td | Celda de datos |

Atributos relacionados:

- scope="col": encabezado de columna.
- scope="row": encabezado de fila.
- colspan: cantidad de columnas que abarca una celda.
- rowspan: cantidad de filas que abarca una celda.

Ejemplo:

~~~html
<table>
    <caption>Materias</caption>
    <thead>
        <tr>
            <th scope="col">Materia</th>
            <th scope="col">Calificación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Programación</th>
            <td>95</td>
        </tr>
    </tbody>
</table>
~~~

## Formularios

| Elemento | Función |
|---|---|
| form | Agrupa controles |
| label | Etiqueta descriptiva |
| input | Campo de entrada |
| textarea | Texto de varias líneas |
| select, option | Lista de opciones |
| button | Botón |
| fieldset, legend | Agrupar y nombrar controles |

Tipos habituales de input:

- text
- email
- password
- number
- date
- checkbox
- radio
- file
- submit
- search
- tel
- url

Atributos habituales:

| Atributo | Función |
|---|---|
| id | Identificador del control |
| name | Nombre del dato al enviarse |
| value | Valor del control |
| type | Tipo de entrada |
| required | Campo obligatorio |
| placeholder | Sugerencia de contenido |
| min, max, step | Límites e incremento |
| minlength, maxlength | Límites de longitud |
| for | Relaciona un label con el id del control |
| action | Destino del envío del formulario |
| method | Método HTTP del envío, como GET o POST |

Ejemplo:

~~~html
<form action="/registro" method="post">
    <label for="correo">Correo:</label>
    <input type="email" id="correo" name="correo" required>
    <button type="submit">Enviar</button>
</form>
~~~

## Audio y video

| Elemento | Función |
|---|---|
| audio | Reproductor de audio |
| video | Reproductor de video |
| source | Archivo alternativo de un recurso |
| track | Subtítulos, leyendas o pistas de texto |

Atributos comunes:

- controls: muestra controles del reproductor.
- width y height: dimensiones del video.
- autoplay: solicita reproducción automática; evita usarlo con sonido.
- muted: inicia el contenido silenciado.
- loop: repite el contenido.

Ejemplo:

~~~html
<video controls width="640">
    <source src="video/guia.mp4" type="video/mp4">
    <track kind="captions" src="video/guia-es.vtt" srclang="es" label="Español">
    Tu navegador no puede reproducir este video.
</video>
~~~

## Atributos globales comunes

| Atributo | Uso |
|---|---|
| id | Identificador único en el documento |
| class | Agrupa elementos |
| lang | Idioma del contenido |
| title | Información adicional |
| hidden | Oculta el elemento |
| tabindex | Participación y orden de foco mediante teclado |

## Validación y accesibilidad

- Relaciona label y controles usando for e id.
- Usa alt para imágenes informativas.
- Usa caption y th para tablas de datos.
- Mantén el orden lógico de encabezados.
- Comprueba la navegación con teclado.
- Usa [Nu HTML Checker](https://validator.w3.org/nu/) para revisar el marcado.

La validación automática no reemplaza las pruebas de accesibilidad ni la revisión manual.

## Referencias

- [MDN — Elementos HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element)
- [MDN — Formularios](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — Tablas accesibles](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [MDN — Audio y video](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Nu HTML Checker](https://validator.w3.org/nu/)
