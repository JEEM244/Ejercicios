# Guía de HTML

**Estado:** en desarrollo. **Alcance:** fundamentos de HTML moderno y estructuras comunes.

## 1. ¿Qué es HTML?

HTML (HyperText Markup Language) es un lenguaje de marcado que define la estructura y el significado del contenido de una página web. No es un lenguaje de programación: describe qué representa cada parte del documento.

Se utiliza para organizar títulos, párrafos, enlaces, imágenes, listas, tablas, formularios y otras partes de una página.

## 2. Documento HTML mínimo

~~~html
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
</head>
<body>
    <h1>Hola, mundo</h1>
    <p>Estoy aprendiendo HTML.</p>
</body>
</html>
~~~

### Partes principales

- <!doctype html>: activa el modo estándar de HTML moderno.
- html: elemento raíz del documento.
- lang="es": indica el idioma principal del contenido.
- head: contiene metadatos y referencias a recursos.
- meta charset="UTF-8": declara la codificación de caracteres.
- meta name="viewport": configura el área de visualización en dispositivos móviles.
- title: define el título de la pestaña o ventana.
- body: contiene el contenido del documento.

## 3. Elementos, etiquetas y atributos

Un elemento suele escribirse con etiqueta de apertura, contenido y etiqueta de cierre:

~~~html
<p class="nota">Este es un párrafo.</p>
~~~

- p es el nombre del elemento.
- class es un atributo.
- nota es el valor del atributo.
- El texto es el contenido.

Algunos elementos son vacíos y no tienen etiqueta de cierre, como img, br y meta.

## 4. Texto y encabezados

HTML ofrece encabezados desde h1 hasta h6. Deben organizar el contenido por jerarquía, no elegirse solo por el tamaño visual.

~~~html
<h1>Guía de programación</h1>
<h2>Lenguajes web</h2>
<h3>HTML</h3>
<p>HTML define la estructura del contenido.</p>
<strong>Texto importante</strong>
<em>Texto con énfasis</em>
~~~

## 5. Listas

Lista sin orden:

~~~html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
~~~

Lista ordenada:

~~~html
<ol>
    <li>Crear el archivo</li>
    <li>Escribir la estructura</li>
    <li>Abrirlo en el navegador</li>
</ol>
~~~

Cada elemento de una lista se representa con li.

## 6. Enlaces e imágenes

~~~html
<a href="https://developer.mozilla.org/">Consultar MDN</a>

<img src="imagenes/logo.png" alt="Logotipo del proyecto">
~~~

- href indica el destino de un enlace.
- src indica la ubicación del recurso de imagen.
- alt ofrece una alternativa textual para la imagen.

Si una imagen es puramente decorativa y no aporta información, puede utilizarse alt vacío.

## 7. Estructura semántica

Los elementos semánticos expresan el propósito del contenido:

| Elemento | Propósito |
|---|---|
| header | Encabezado de una página o sección |
| nav | Bloque de navegación |
| main | Contenido principal |
| section | Sección temática |
| article | Contenido independiente |
| aside | Contenido complementario |
| footer | Pie de una página o sección |

Ejemplo:

~~~html
<body>
    <header>
        <h1>Mi sitio</h1>
        <nav>
            <a href="index.html">Inicio</a>
            <a href="contacto.html">Contacto</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Sobre el proyecto</h2>
            <p>Este sitio sirve para practicar HTML.</p>
        </article>
    </main>

    <footer>
        <p>Proyecto de práctica</p>
    </footer>
</body>
~~~

No elijas un elemento por su apariencia. HTML aporta estructura y significado; CSS se encarga de la presentación.

## 8. Tablas para datos

Las tablas sirven para presentar información que se entiende mejor comparando filas y columnas, por ejemplo horarios, resultados o inventarios. No deben utilizarse para construir el diseño general de una página.

Elementos básicos:

| Elemento | Función |
|---|---|
| table | Contenedor de la tabla |
| caption | Título o descripción breve de la tabla |
| thead | Agrupa las filas de encabezado |
| tbody | Agrupa las filas principales |
| tfoot | Agrupa filas de resumen o cierre |
| tr | Fila |
| th | Celda de encabezado |
| td | Celda de datos |

~~~html
<table>
    <caption>Horario de estudio</caption>
    <thead>
        <tr>
            <th scope="col">Día</th>
            <th scope="col">Actividad</th>
            <th scope="col">Duración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Lunes</th>
            <td>HTML</td>
            <td>40 minutos</td>
        </tr>
        <tr>
            <th scope="row">Martes</th>
            <td>CSS</td>
            <td>30 minutos</td>
        </tr>
    </tbody>
</table>
~~~

Los encabezados th deben identificar qué representa cada fila o columna. El atributo scope ayuda a indicar si el encabezado corresponde a una fila o a una columna. caption ofrece un nombre comprensible para la tabla.

Los atributos rowspan y colspan permiten que una celda abarque varias filas o columnas. Úsalos solo cuando la estructura de los datos lo necesite.

## 9. Formularios

Un formulario recoge datos que el usuario introduce o selecciona. El elemento form agrupa controles y define cómo se enviarán los datos.

~~~html
<form action="/registro" method="get">
    <p>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
    </p>

    <p>
        <label for="correo">Correo:</label>
        <input type="email" id="correo" name="correo" required>
    </p>

    <button type="submit">Enviar</button>
</form>
~~~

### Elementos principales

| Elemento | Uso |
|---|---|
| form | Agrupa los controles y define el envío |
| label | Describe un control |
| input | Campo de entrada con distintos tipos |
| textarea | Campo de texto de varias líneas |
| select | Lista desplegable |
| option | Opción de una lista |
| button | Botón de acción |
| fieldset | Agrupa controles relacionados |
| legend | Describe el grupo de controles |

### Atributos importantes

- type define el tipo de control, por ejemplo text, email, number, date, checkbox o radio.
- id identifica el control en el documento.
- name determina el nombre de ese dato cuando se envía el formulario.
- value establece un valor inicial o el valor que se enviará.
- required indica que el control debe completarse.
- placeholder muestra una sugerencia, pero no reemplaza a label.
- min, max y step establecen límites o incrementos en controles compatibles.
- minlength y maxlength establecen límites de longitud para ciertos campos.

La relación entre label y control se puede crear usando for en label y el mismo valor en id en el control. Es una forma clara de mantenerlos asociados.

### Agrupar opciones

~~~html
<fieldset>
    <legend>Modalidad de estudio</legend>

    <input type="radio" id="presencial" name="modalidad" value="presencial">
    <label for="presencial">Presencial</label>

    <input type="radio" id="distancia" name="modalidad" value="distancia">
    <label for="distancia">A distancia</label>
</fieldset>
~~~

Los controles radio que pertenecen a una misma selección comparten el atributo name. En cambio, los checkbox permiten marcar varias opciones.

### Validación nativa

El navegador puede comprobar algunas reglas usando atributos como required, type, min, max, minlength, maxlength y pattern.

Esta validación mejora la experiencia, pero no sustituye la validación del lado del servidor. Los datos recibidos siempre deben comprobarse en el backend porque el HTML del navegador puede modificarse.

Importante: un formulario no guarda ni envía datos a una base de datos por sí solo. Para procesar el envío necesita un destino y una aplicación del lado del servidor.

## 10. Audio y video

HTML permite incluir archivos de audio y video sin depender necesariamente de un reproductor externo.

~~~html
<audio controls>
    <source src="audio/introduccion.mp3" type="audio/mpeg">
    Tu navegador no puede reproducir este audio.
</audio>

<video controls width="640">
    <source src="video/explicacion.mp4" type="video/mp4">
    Tu navegador no puede reproducir este video.
</video>
~~~

- controls muestra los controles del reproductor.
- source permite indicar uno o varios archivos y su tipo MIME.
- width puede establecer el ancho inicial del video.
- El texto alternativo dentro del elemento funciona como contenido de respaldo en navegadores que no admiten el reproductor.

Para video con diálogo, agrega subtítulos o leyendas mediante track y proporciona una transcripción cuando sea necesaria. Los archivos WebVTT usan la extensión .vtt. No dependas únicamente del sonido o de la imagen para comunicar información importante.

Evita la reproducción automática con sonido. Permite que la persona decida cuándo reproducir el contenido.

## 11. Accesibilidad básica en HTML

La accesibilidad empieza al elegir correctamente los elementos y escribir el contenido.

- Utiliza encabezados en un orden lógico.
- Declara el idioma de la página con lang.
- Usa enlaces cuyo texto explique su destino.
- Proporciona alt útil para imágenes informativas y alt vacío para las decorativas.
- Asocia cada control de formulario con un label.
- Agrupa opciones relacionadas con fieldset y legend.
- Usa th y caption para dar contexto a las tablas.
- Comprueba que los controles se puedan recorrer con el teclado.
- No comuniques información únicamente mediante color, posición, sonido o imagen.
- Proporciona subtítulos y transcripciones para contenido multimedia cuando corresponda.

No agregues atributos ARIA por costumbre. Primero utiliza el elemento HTML nativo que ya expresa la función necesaria.

## 12. Validar un documento HTML

Validar significa comprobar si el marcado cumple las reglas del lenguaje y detectar errores que pueden afectar su interpretación.

Una revisión práctica:

1. Abre el archivo en un navegador y comprueba que el contenido aparece.
2. Revisa que no falten cierres, que los elementos estén anidados correctamente y que los atributos estén escritos de forma válida.
3. Comprueba que los enlaces y las rutas de imágenes funcionen.
4. Recorre los enlaces y controles usando Tab y Shift + Tab.
5. Comprueba los textos alternativos y las etiquetas de los campos.
6. Utiliza el [Nu HTML Checker](https://validator.w3.org/nu/) para detectar problemas de conformidad.

Que el validador no marque errores no significa que la página sea automáticamente accesible, segura o fácil de usar. También hacen falta pruebas de teclado, contenido y experiencia.

## 13. Errores frecuentes

- Olvidar la declaración doctype.
- Colocar contenido visible dentro de head.
- Usar encabezados solo para cambiar el tamaño del texto.
- Repetir un mismo valor de id en varios elementos.
- Omitir alt en imágenes informativas.
- Usar tablas para distribuir bloques de una página.
- Crear formularios sin label o sin name en los controles que deben enviarse.
- Creer que required sustituye la validación del servidor.
- Insertar multimedia sin controles ni alternativa textual.
- Usar elementos genéricos cuando existe uno semántico adecuado.

## 14. Buenas prácticas

- Mantener una jerarquía clara de encabezados.
- Elegir elementos según su significado.
- Escribir atributos entre comillas.
- Usar nombres descriptivos para archivos y carpetas.
- Proporcionar alternativas textuales a las imágenes informativas.
- Asociar etiquetas a todos los campos de formulario.
- Crear tablas solo para datos tabulares.
- Probar formularios y navegación con teclado.
- Separar estructura, presentación y comportamiento: HTML, CSS y JavaScript.

## 15. Continuación

- [Referencia rápida](REFERENCIA.md)
- [Ejercicios](EJERCICIOS/README.md)

## Fuentes

- [MDN — HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN — Tablas accesibles](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [MDN — Formularios HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — Audio y video](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [MDN — HTML y accesibilidad](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- [Nu HTML Checker](https://validator.w3.org/nu/)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)


## 16. Metadatos del documento

Los metadatos describen información sobre la página. Normalmente se colocan dentro de head y no aparecen como contenido principal.

~~~html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Guía práctica para aprender HTML.">
    <title>Guía de HTML</title>
    <link rel="icon" href="imagenes/favicon.svg" type="image/svg+xml">
</head>
~~~

- charset declara cómo se codifica el texto.
- viewport ayuda a que el ancho de la página se adapte al dispositivo.
- description contiene un resumen de la página. Algunos buscadores pueden utilizarlo, pero no está garantizado.
- title define el título del documento.
- link rel="icon" relaciona un icono con la página.

El elemento base puede establecer una URL base para resolver rutas relativas. Debe utilizarse con cuidado porque modifica cómo se resuelven todas las rutas relativas del documento. En páginas comunes suele ser mejor escribir rutas claras sin base.

## 17. Atributos globales

Los atributos globales pueden utilizarse en muchos elementos HTML. Su efecto depende del elemento y del contexto.

| Atributo | Uso |
|---|---|
| id | Identificador único dentro del documento |
| class | Agrupa elementos para estilos o scripts |
| lang | Declara el idioma del contenido |
| dir | Define la dirección del texto, como ltr o rtl |
| title | Añade información consultiva |
| hidden | Indica que el elemento no debe mostrarse |
| tabindex | Ajusta cómo participa un elemento en el foco del teclado |
| contenteditable | Permite editar el contenido en el navegador |
| spellcheck | Indica si se revisa la ortografía |
| data-* | Guarda datos personalizados asociados al elemento |

~~~html
<article id="tema-html" class="tarjeta tema" lang="es" data-nivel="basico">
    <h2>Introducción a HTML</h2>
    <p>Este artículo contiene los fundamentos.</p>
</article>
~~~

Reglas importantes:

- Un id debe identificar un solo elemento en el documento.
- Una class puede repetirse en muchos elementos.
- lang puede establecerse en html y sobrescribirse en una parte escrita en otro idioma.
- hidden no debe utilizarse para ocultar información importante a ciertos usuarios.
- Para tabindex, 0 y -1 suelen cubrir los casos habituales. Evita valores positivos.
- data-* sirve para datos técnicos no sensibles; no guardes contraseñas, tokens ni información privada.
- contenteditable permite editar contenido en la página, pero no guarda esos cambios en un servidor.
- title no debe reemplazar una etiqueta visible o una instrucción necesaria.

## 18. Cargar CSS y JavaScript externos

HTML puede enlazar archivos externos. CSS define la presentación y JavaScript añade comportamiento.

~~~html
<head>
    <link rel="stylesheet" href="css/estilos.css">
    <script src="js/app.js" defer></script>
</head>
~~~

El atributo rel indica la relación del recurso con el documento y href indica su ruta.

Con defer, un script clásico externo se descarga mientras se analiza el documento y se ejecuta después de terminar el análisis HTML, antes del evento DOMContentLoaded. Los scripts defer mantienen el orden en el que aparecen.

| Forma | Comportamiento general |
|---|---|
| script sin atributos | Puede detener el análisis HTML mientras se descarga y ejecuta |
| script defer | Se ejecuta después del análisis HTML y conserva el orden |
| script async | Se ejecuta cuando termina de descargarse; no garantiza el orden |
| script type="module" | Utiliza módulos JavaScript y se difiere de forma predeterminada |

No agregues async o defer a scripts en línea que no tienen src: esos atributos no controlan su ejecución de la misma forma. Usa async solo cuando el script sea independiente y no dependa del orden de otros scripts.

~~~html
<noscript>
    <p>Esta página ofrece una versión básica sin funciones interactivas.</p>
</noscript>
~~~

noscript permite mostrar un mensaje o contenido alternativo cuando los scripts no están disponibles o desactivados.

## 19. Imágenes adaptables

Una imagen puede tener varias versiones para que el navegador elija la más adecuada según el espacio disponible y la pantalla.

~~~html
<img
    src="imagenes/foto-960.jpg"
    srcset="imagenes/foto-480.jpg 480w,
            imagenes/foto-960.jpg 960w,
            imagenes/foto-1440.jpg 1440w"
    sizes="(max-width: 600px) 100vw, 700px"
    width="960"
    height="640"
    alt="Vista de un espacio de trabajo"
>
~~~

- src indica una imagen de respaldo.
- srcset ofrece imágenes candidatas y sus anchos.
- sizes indica al navegador cuánto espacio se espera que ocupe la imagen.
- width y height comunican sus dimensiones y ayudan a reservar espacio antes de cargarla.
- alt describe la información o función de la imagen.

picture permite ofrecer diferentes composiciones, por ejemplo una imagen horizontal para pantallas grandes y una vertical para pantallas pequeñas.

~~~html
<picture>
    <source media="(max-width: 600px)" srcset="imagenes/portada-vertical.jpg">
    <img
        src="imagenes/portada-horizontal.jpg"
        width="1200"
        height="675"
        alt="Vista general del proyecto"
    >
</picture>
~~~

El elemento img es obligatorio dentro de picture y funciona como opción predeterminada. Mantén el texto alternativo en img.

~~~html
<img
    src="imagenes/galeria.jpg"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    alt="Detalle de la galería"
>
~~~

loading="lazy" permite retrasar la carga hasta que una imagen se acerque a la zona visible. Es útil para imágenes más abajo en la página, pero no conviene aplicarlo automáticamente a la imagen principal que aparece al abrirla. decoding="async" es una sugerencia para que el navegador decodifique la imagen de forma asíncrona.

## 20. Figuras y contenido incrustado

figure agrupa contenido autónomo, como una imagen, un diagrama o un ejemplo, junto con una descripción opcional mediante figcaption.

~~~html
<figure>
    <img src="imagenes/diagrama.jpg" alt="Diagrama de las partes de una página web">
    <figcaption>Partes principales de un documento web.</figcaption>
</figure>
~~~

iframe incrusta otro documento dentro de la página. Úsalo solo cuando el contenido externo sea necesario y confiable.

~~~html
<iframe
    src="contenido/guia.html"
    title="Guía complementaria de HTML"
    width="600"
    height="300"
    loading="lazy"
    sandbox
></iframe>
~~~

- src indica el documento que se va a incrustar.
- title explica qué contiene el marco para quienes utilizan tecnologías de asistencia.
- width y height definen sus dimensiones iniciales.
- loading="lazy" puede retrasar la carga si está lejos de la zona visible.
- sandbox aplica restricciones al documento incrustado.

No agregues permisos a sandbox sin entender para qué los necesita el contenido. Cada permiso adicional reduce las restricciones. Comprueba también las políticas del sitio externo: algunos sitios no permiten ser incrustados.

## 21. Elementos interactivos nativos

details crea una sección que se puede expandir y contraer. summary contiene el texto que funciona como encabezado interactivo y debe ser el primer hijo de details.

~~~html
<details>
    <summary>¿Qué es HTML?</summary>
    <p>Es un lenguaje de marcado que organiza el contenido de una página.</p>
</details>
~~~

Si se agrega el atributo open, el contenido comienza desplegado.

dialog representa un cuadro de diálogo. Puede mostrarse como un diálogo no modal con el atributo open o abrirse de forma modal desde JavaScript mediante showModal().

~~~html
<dialog open>
    <h2>Aviso</h2>
    <p>Este diálogo está abierto como ejemplo no modal.</p>
    <form method="dialog">
        <button type="submit">Cerrar</button>
    </form>
</dialog>
~~~

method="dialog" permite cerrar el diálogo al enviar el formulario que está dentro. Para abrir un diálogo modal desde un botón normalmente se necesita JavaScript. No agregues tabindex al elemento dialog.

progress representa el avance de una tarea:

~~~html
<label for="avance">Avance del curso:</label>
<progress id="avance" max="100" value="65">65%</progress>
~~~

meter representa una medida dentro de un rango conocido:

~~~html
<label for="nivel">Nivel de dominio:</label>
<meter id="nivel" min="0" max="10" low="4" high="8" optimum="9" value="7">7 de 10</meter>
~~~

No utilices progress y meter como si fueran lo mismo: uno representa progreso de una tarea y el otro una medida dentro de un rango.

## 22. Atributos booleanos

Algunos atributos funcionan por presencia o ausencia. Si aparecen en el elemento, se consideran activados; si no aparecen, están desactivados.

Ejemplos: required, disabled, checked, selected, multiple, controls, open y hidden.

~~~html
<input type="text" required>
<button type="button" disabled>Desactivado</button>
<details open>
    <summary>Información</summary>
    <p>Contenido visible al inicio.</p>
</details>
~~~

En un atributo booleano, escribir open="false" no lo desactiva: su presencia sigue activándolo. Para desactivarlo, hay que quitar el atributo.

## 23. Lista final de revisión

- [ ] El idioma del documento está declarado.
- [ ] Los metadatos esenciales están dentro de head.
- [ ] Los títulos describen correctamente la página y su jerarquía.
- [ ] Los enlaces tienen destinos y textos descriptivos.
- [ ] Las imágenes tienen alternativas y dimensiones adecuadas.
- [ ] Las imágenes que no están al inicio se cargan de forma diferida cuando corresponde.
- [ ] Los recursos externos tienen rutas correctas.
- [ ] Los formularios tienen etiquetas y validación en el servidor cuando reciben datos.
- [ ] Los marcos incrustados tienen título y permisos limitados.
- [ ] Los controles se pueden utilizar con teclado.
- [ ] El documento se revisó con un validador y una comprobación manual.

## Fuentes adicionales

- [MDN — Metadatos del documento](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
- [MDN — Atributos globales](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes)
- [MDN — Elemento script](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [MDN — Imágenes adaptables](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN — Elemento picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)
- [MDN — Elemento iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [MDN — Elemento details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
- [MDN — Elemento dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
