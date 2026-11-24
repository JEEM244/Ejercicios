# Solution — JS-010

## Expected output

~~~text
Título: El principito
Autor: Antoine de Saint-Exupéry
Descripción: Libro: El principito — Autor: Antoine de Saint-Exupéry
Disponible: false
Categoría: Novela
Editorial: Rey
~~~

The sample console labels and book data are kept in Spanish to match the starter and solution code.

## Explanation

The object groups related properties. Dot notation reads known properties, while bracket notation allows a variable to be used as a property name. editorial is a nested object and descripcion() is a method that reads properties through this.

Although libro is declared with const, its properties can change.

File: [solucion.js](solucion.js).
