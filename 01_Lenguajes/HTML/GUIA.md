# Guía de HTML

**Estado:** primera versión. **Alcance:** fundamentos de HTML moderno.

## 1. ¿Qué es HTML?

HTML (HyperText Markup Language) es un lenguaje de marcado que define la estructura y el significado del contenido de una página web. No es un lenguaje de programación: describe qué representa cada parte del documento.

Se utiliza para organizar títulos, párrafos, enlaces, imágenes, listas, tablas, formularios y otras partes de una página.

## 2. Documento HTML mínimo

```html
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
```

### Partes principales

- `<!doctype html>`: activa el modo estándar de HTML moderno.
- `html`: elemento raíz del documento.
- `lang="es"`: indica el idioma principal del contenido.
- `head`: contiene metadatos y referencias a recursos.
- `meta charset="UTF-8"`: declara la codificación de caracteres.
- `meta name="viewport"`: configura el área de visualización en dispositivos móviles.
- `title`: define el título de la pestaña o ventana.
- `body`: contiene el contenido del documento.

## 3. Elementos, etiquetas y atributos

Un elemento suele escribirse con etiqueta de apertura, contenido y etiqueta de cierre:

```html
<p class="nota">Este es un párrafo.</p>
```

- `p` es el nombre del elemento.
- `class` es un atributo.
- `nota` es el valor del atributo.
- El texto es el contenido.

Algunos elementos son vacíos y no tienen etiqueta de cierre, como `img`, `br` y `meta`.

## 4. Texto y encabezados

HTML ofrece encabezados desde `h1` hasta `h6`. Deben organizar el contenido por jerarquía, no elegirse solo por el tamaño visual.

```html
<h1>Guía de programación</h1>
<h2>Lenguajes web</h2>
<h3>HTML</h3>
<p>HTML define la estructura del contenido.</p>
<strong>Texto importante</strong>
<em>Texto con énfasis</em>
```

## 5. Listas

Lista sin orden:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Lista ordenada:

```html
<ol>
    <li>Crear el archivo</li>
    <li>Escribir la estructura</li>
    <li>Abrirlo en el navegador</li>
</ol>
```

Cada elemento de una lista se representa con `li`.

## 6. Enlaces e imágenes

```html
<a href="https://developer.mozilla.org/">Consultar MDN</a>

<img src="imagenes/logo.png" alt="Logotipo del proyecto">
```

- `href` indica el destino de un enlace.
- `src` indica la ubicación del recurso de imagen.
- `alt` ofrece una alternativa textual para la imagen.

Si una imagen es puramente decorativa y no aporta información, puede utilizarse `alt=""`.

## 7. Estructura semántica

Los elementos semánticos expresan el propósito del contenido:

| Elemento | Propósito |
|---|---|
| `header` | Encabezado de una página o sección |
| `nav` | Bloque de navegación |
| `main` | Contenido principal |
| `section` | Sección temática |
| `article` | Contenido independiente |
| `aside` | Contenido complementario |
| `footer` | Pie de una página o sección |

Ejemplo:

```html
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
```

No elijas un elemento por su apariencia. HTML aporta estructura y significado; CSS se encarga de la presentación.

## 8. Errores frecuentes

- Olvidar `<!doctype html>`.
- Colocar contenido visible dentro de `head`.
- Usar encabezados solo para cambiar el tamaño del texto.
- Repetir un mismo valor de `id` en varios elementos.
- Omitir el atributo `alt` en imágenes informativas.
- Utilizar `div` para todo sin revisar si existe un elemento semántico apropiado.
- Anidar elementos en un orden inválido.

## 9. Buenas prácticas

- Mantener una jerarquía clara de encabezados.
- Elegir elementos según su significado.
- Escribir atributos entre comillas.
- Usar nombres descriptivos para archivos y carpetas.
- Proporcionar alternativas textuales a las imágenes informativas.
- Separar estructura, presentación y comportamiento: HTML, CSS y JavaScript.

## 10. Continuación

- [Referencia rápida](REFERENCIA.md)
- [Ejercicios](EJERCICIOS/README.md)

## Fuentes

- [MDN — HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN — Elementos HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)
