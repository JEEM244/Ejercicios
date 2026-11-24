# Guía de CSS

**Nivel de esta unidad:** fundamentos.  
**Prerrequisitos recomendados:** conocer la estructura básica de HTML.  
**Objetivo:** aprender a describir la presentación de una página sin mezclar los estilos con su contenido.

## 1. ¿Qué es CSS?

CSS significa *Cascading Style Sheets* (hojas de estilo en cascada). Es un lenguaje de hojas de estilo que describe cómo se presenta un documento, por ejemplo, una página HTML.

HTML aporta estructura y significado. CSS controla aspectos como color, tipografía, espacios, tamaños y distribución.

Un archivo CSS no reemplaza al HTML. Los dos trabajan juntos.

## 2. Sintaxis básica

Una regla CSS tiene un selector y un bloque de declaraciones:

~~~css
p {
    color: navy;
    font-size: 1rem;
}
~~~

- **Selector:** indica a qué elementos se aplica la regla (p).
- **Propiedad:** indica qué aspecto se modifica (color).
- **Valor:** indica el resultado deseado (navy).
- **Declaración:** combinación de propiedad y valor, terminada en punto y coma.

Las llaves agrupan las declaraciones. Los comentarios se escriben con /* comentario */.

## 3. Cómo conectar CSS con HTML

La forma recomendada para una página normal es un archivo externo:

~~~html
<head>
    <link rel="stylesheet" href="css/estilos.css">
</head>
~~~

La ruta debe coincidir con la ubicación real del archivo.

También existen CSS dentro de un elemento style y estilos en el atributo style. Sirven para pruebas o casos puntuales, pero mezclar estilos en cada elemento dificulta el mantenimiento. En CodeVault usaremos archivos externos como regla general.

## 4. Selectores

Los selectores permiten elegir los elementos que recibirán las reglas.

| Tipo | Ejemplo | Selecciona |
|---|---|---|
| Elemento | p | Todos los párrafos |
| Clase | .aviso | Elementos con class="aviso" |
| ID | #principal | El elemento con id="principal" |
| Universal | * | Todos los elementos |
| Atributo | input[type="email"] | Entradas de correo |
| Grupo | h1, h2 | Encabezados h1 y h2 |

Las clases se pueden reutilizar. Un mismo elemento puede tener varias clases. Un ID debe identificar de forma única un elemento dentro del documento.

### 4.1 Combinadores

Los combinadores relacionan selectores:

~~~css
article p { }       /* cualquier p dentro de article */
article > p { }     /* p que sea hijo directo de article */
h2 + p { }          /* primer p que sigue inmediatamente a h2 */
h2 ~ p { }          /* párrafos posteriores que comparten padre */
~~~

El espacio significa descendiente; > significa hijo directo; + selecciona el hermano inmediato; ~ selecciona hermanos posteriores.

### 4.2 Pseudoclases y pseudoelementos

Una pseudoclase selecciona un estado o una condición:

~~~css
a:hover { }
a:focus-visible { }
li:first-child { }
input:checked { }
~~~

No dependas solo de :hover: el teclado también necesita un estado visible, por ejemplo :focus-visible.

Un pseudoelemento representa una parte del elemento:

~~~css
p::first-letter { }
.card::before { }
~~~

No uses contenido generado con ::before o ::after para información esencial que una persona necesite comprender.

## 5. Cascada

La cascada decide qué declaración se aplica cuando varias reglas intentan cambiar la misma propiedad.

En un caso básico de estilos normales escritos por el autor, revisa:

1. ¿La regla coincide con el elemento?
2. ¿Qué regla tiene mayor especificidad?
3. Si la especificidad empata, ¿cuál aparece después?

La cascada real también considera origen, importancia, capas y ámbitos. Por eso el orden de archivo no es la única regla.

Ejemplo:

~~~css
p { color: black; }
.aviso { color: darkred; }
~~~

Un párrafo con class="aviso" será rojo oscuro porque el selector de clase tiene mayor especificidad que el selector de elemento.

## 6. Especificidad

La especificidad compara el peso de los selectores cuando la cascada llega a ese paso. En los selectores comunes, puedes representarla con tres columnas:

| Selector | ID | Clase, atributo o pseudoclase | Elemento o pseudoelemento |
|---|---:|---:|---:|
| p | 0 | 0 | 1 |
| .aviso | 0 | 1 | 0 |
| #principal | 1 | 0 | 0 |
| main .aviso p | 0 | 1 | 2 |

Compara de izquierda a derecha: primero IDs, luego clases y finalmente elementos. No sumes las columnas como si fueran un número decimal.

Para empezar, evita selectores demasiado largos y no uses !important como atajo para arreglar conflictos. Es mejor entender qué regla está ganando.

## 7. Herencia

Algunas propiedades, como color y font-family, suelen heredarse de un elemento padre. Otras, como margin, padding y border, normalmente no se heredan.

~~~css
body {
    color: #263238;
    font-family: Arial, sans-serif;
}
~~~

Los textos descendientes pueden recibir el color y la familia tipográfica del body, salvo que otra regla aplicable indique lo contrario.

## 8. Modelo de caja

El navegador representa cada elemento como una caja. De dentro hacia fuera:

1. **Content:** contenido.
2. **Padding:** espacio interno entre contenido y borde.
3. **Border:** borde.
4. **Margin:** espacio externo alrededor de la caja.

~~~css
.tarjeta {
    width: 300px;
    padding: 20px;
    border: 2px solid #334155;
    margin: 16px;
}
~~~

Con el valor inicial content-box, el ancho de 300px se refiere al contenido. El padding y el borde se agregan por fuera.

Una configuración muy utilizada es:

~~~css
*,
*::before,
*::after {
    box-sizing: border-box;
}
~~~

Con border-box, el ancho declarado incluye contenido, padding y borde. El margen sigue quedando fuera.

## 9. Tamaños y unidades

| Unidad | Uso común |
|---|---|
| px | Tamaños fijos en píxeles CSS |
| % | Tamaño relativo al bloque o referencia que corresponda |
| em | Relativo al tamaño de fuente del contexto |
| rem | Relativo al tamaño de fuente del elemento raíz |
| vw | Porcentaje del ancho del viewport |
| vh | Porcentaje de la altura del viewport |

No conviertas todo a píxeles. rem es útil para tamaños de texto y espaciado que deben escalar con la configuración del usuario. El significado exacto de los porcentajes depende de la propiedad.

También puedes limitar dimensiones:

~~~css
.contenedor {
    width: 90%;
    max-width: 60rem;
    margin-inline: auto;
}
~~~

## 10. Colores

CSS permite expresar colores con nombres, hexadecimal, RGB y HSL:

~~~css
h1 { color: navy; }
p { color: #263238; }
button { background-color: rgb(30 64 175); }
section { background-color: hsl(210 30% 96%); }
~~~

Algunos formatos admiten un canal alfa para transparencia. Elige combinaciones con contraste suficiente entre texto y fondo. No uses solo el color para comunicar un error, estado o categoría: acompáñalo con texto, icono o forma.

## 11. Tipografía

Propiedades frecuentes:

~~~css
body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
}

h1 {
    font-size: 2rem;
    font-weight: 700;
}
~~~

- font-family: familia tipográfica y alternativas.
- font-size: tamaño del texto.
- font-weight: grosor.
- line-height: altura de línea.
- text-align: alineación.
- text-decoration: decoración, por ejemplo el subrayado.

Incluye familias de respaldo y evita bloques largos con una altura de línea demasiado pequeña.

## 12. Display: primera aproximación

display define cómo participa un elemento en el diseño.

- block: normalmente empieza en una nueva línea y ocupa el ancho disponible.
- inline: fluye dentro de una línea; ancho y alto no se comportan como en una caja de bloque.
- inline-block: fluye en línea, pero admite dimensiones de caja.
- none: el elemento no genera caja ni se muestra en el diseño.

Flexbox y Grid son modelos de distribución completos; se estudiarán en la siguiente ampliación de esta unidad.

## 13. Depuración

Cuando un estilo no funciona:

1. Comprueba que el archivo CSS esté enlazado.
2. Revisa que la ruta y el nombre coincidan.
3. Comprueba que el selector realmente encuentre el elemento.
4. Revisa errores de escritura, llaves y punto y coma.
5. Usa las herramientas de desarrollo del navegador para inspeccionar reglas y valores calculados.
6. Revisa si otra declaración está ganando en la cascada.

## 14. Buenas prácticas

- Mantén HTML y CSS en archivos separados.
- Usa nombres de clase descriptivos y consistentes.
- Prefiere clases reutilizables en lugar de depender de IDs para dar estilo.
- Evita selectores innecesariamente específicos.
- Agrupa reglas relacionadas y usa comentarios cuando aporten contexto.
- Conserva indicadores de foco para navegación con teclado.
- Comprueba la página en varios anchos de ventana.
- No añadas !important sin comprender el conflicto.
- Prueba tus cambios con contenido realista, no solo con texto de ejemplo.

## 15. Fuentes

- [MDN — Aprender CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
- [MDN — Selectores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)
- [MDN — Cascada y herencia](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade)
- [MDN — Especificidad](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)
- [MDN — Modelo de caja](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model)
- [MDN — Colores](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors)
- [MDN — Estilizar texto](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling)
- [W3C — CSS](https://www.w3.org/Style/CSS/)
