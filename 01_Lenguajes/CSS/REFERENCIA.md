# Referencia rápida de CSS

Hoja de consulta para propiedades y patrones comunes. Para entender cada concepto, consulta [GUIA.md](GUIA.md).

## Sintaxis

~~~css
selector {
    propiedad: valor;
}
~~~

Comentario: /* texto */

## Selectores

| Patrón | Significado |
|---|---|
| p | Elemento |
| .clase | Clase |
| #identificador | ID |
| * | Universal |
| [disabled] | Atributo presente |
| [type="email"] | Atributo con valor |
| A B | Descendiente |
| A > B | Hijo directo |
| A + B | Hermano inmediato |
| A ~ B | Hermano posterior |
| A:hover | Estado hover |
| A:focus-visible | Foco visible |
| A:first-child | Primer hijo |
| A::before | Pseudoelemento |

## Cascada y especificidad

- Primero se consideran coincidencia, origen, importancia y capas.
- Después se compara especificidad.
- En empate, se considera ámbito y orden de aparición.
- Forma común: ID - clase/atributo/pseudoclase - elemento/pseudoelemento.
- Evita usar !important para corregir reglas mal organizadas.

## Modelo de caja

| Propiedad | Función |
|---|---|
| width, height | Tamaño |
| min-width, max-width | Límites horizontales |
| min-height, max-height | Límites verticales |
| padding | Espacio interno |
| border | Borde |
| margin | Espacio externo |
| box-sizing | Cómo se calcula el tamaño |

Patrón frecuente:

~~~css
*,
*::before,
*::after {
    box-sizing: border-box;
}
~~~

## Unidades

| Unidad | Referencia |
|---|---|
| px | Píxel CSS |
| % | Referencia definida por la propiedad |
| em | Tamaño de fuente del contexto |
| rem | Tamaño de fuente raíz |
| vw | Ancho del viewport |
| vh | Alto del viewport |

## Colores y texto

~~~css
color: #263238;
background-color: hsl(210 30% 96%);
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.6;
text-align: left;
text-decoration: none;
~~~

Formatos de color: nombres, hexadecimal, rgb(), hsl(). Algunos permiten transparencia mediante alfa.

## Display

- block
- inline
- inline-block
- none

## Centrado horizontal de contenedor

~~~css
.contenedor {
    width: 90%;
    max-width: 60rem;
    margin-inline: auto;
}
~~~

## Recursos oficiales

- [MDN — Referencia CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [MDN — Selectores](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)
- [MDN — Cascada](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade)
- [MDN — Modelo de caja](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model)
