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


## Metadatos y recursos

| Elemento | Función |
|---|---|
| meta name="description" | Descripción de la página |
| link rel="icon" | Icono de la página |
| link rel="stylesheet" | Hoja de estilos externa |
| script src | Archivo JavaScript externo |
| noscript | Contenido alternativo cuando no hay scripts disponibles |
| base | URL base para resolver rutas relativas; usar con cuidado |

### Carga de scripts

| Forma | Comportamiento |
|---|---|
| script sin atributos | Puede bloquear el análisis HTML mientras carga y ejecuta |
| script defer | Ejecuta después del análisis HTML y conserva el orden |
| script async | Ejecuta al terminar la descarga; no garantiza orden |
| script type="module" | Usa módulos y se difiere por defecto |

## Atributos globales

| Atributo | Uso |
|---|---|
| id | Identificador único |
| class | Grupo reutilizable |
| lang | Idioma |
| dir | Dirección del texto: ltr o rtl |
| title | Información consultiva |
| hidden | Oculta el elemento |
| tabindex | Orden de foco; normalmente 0 o -1 |
| contenteditable | Permite editar contenido en la página |
| spellcheck | Revisión ortográfica |
| data-* | Datos personalizados no sensibles |

Los atributos booleanos se activan por presencia. Escribir hidden="false" no lo desactiva: hay que quitar el atributo.

## Imágenes adaptables

- src: imagen de respaldo.
- srcset: candidatos de imagen.
- sizes: ancho previsto de la imagen según el contexto.
- picture: permite elegir una composición alternativa.
- source: define una fuente dentro de picture, audio o video.
- width y height: dimensiones intrínsecas.
- loading="lazy": carga diferida.
- decoding="async": sugerencia de decodificación asíncrona.

## Contenido incrustado

| Elemento o atributo | Uso |
|---|---|
| figure | Agrupa contenido autónomo |
| figcaption | Descripción de figure |
| iframe | Incrusta otro documento |
| title en iframe | Describe el contenido incrustado |
| sandbox | Limita las capacidades del documento incrustado |
| loading="lazy" | Retrasa la carga cuando corresponde |

## Elementos interactivos y de estado

| Elemento | Uso |
|---|---|
| details | Región expandible |
| summary | Título interactivo de details |
| dialog | Cuadro de diálogo |
| progress | Avance de una tarea |
| meter | Medida dentro de un rango |

dialog puede abrirse de manera no modal mediante el atributo open. Para abrirlo como modal desde un botón normalmente se utiliza JavaScript con showModal().

## Referencias adicionales

- [MDN — Metadatos del documento](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
- [MDN — Atributos globales](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes)
- [MDN — Elemento script](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [MDN — Imágenes adaptables](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN — iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [MDN — details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
- [MDN — dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
