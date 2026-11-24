# Solución — JS-010

## Salida esperada

~~~text
Título: El principito
Autor: Antoine de Saint-Exupéry
Descripción: Libro: El principito — Autor: Antoine de Saint-Exupéry
Disponible: false
Categoría: Novela
Editorial: Rey
~~~

## Explicación

El objeto agrupa propiedades relacionadas. La notación con punto consulta propiedades conocidas y la notación con corchetes permite usar una variable como nombre de propiedad. editorial es un objeto anidado y descripcion() es un método que consulta las propiedades mediante this.

Aunque libro se declara con const, sus propiedades pueden cambiar.

Archivo: [solucion.js](solucion.js).
