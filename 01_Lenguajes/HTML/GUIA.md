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
