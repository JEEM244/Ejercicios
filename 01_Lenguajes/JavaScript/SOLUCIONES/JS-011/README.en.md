# Solution — JS-011

## Expected output

~~~text
Nombres: [ 'Mouse', 'Teclado', 'Monitor' ]
Existencias bajas: [ 'Mouse', 'Teclado' ]
Teclado encontrado: Teclado
Valor total: 17550
~~~

The sample console labels remain in Spanish to match the source code.

## Explanation

Each item in productos is an object. map() gets the names, filter() selects records with stock below 5, and find() returns the first matching product.

reduce() accumulates each record's value: price multiplied by stock. The original array is not changed.

File: [solucion.js](solucion.js).
