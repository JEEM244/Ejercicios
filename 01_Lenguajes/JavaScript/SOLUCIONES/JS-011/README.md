# Solución — JS-011

## Salida esperada

~~~text
Nombres: [ 'Mouse', 'Teclado', 'Monitor' ]
Existencias bajas: [ 'Mouse', 'Teclado' ]
Teclado encontrado: Teclado
Valor total: 17550
~~~

## Explicación

Cada elemento de productos es un objeto. map() obtiene los nombres, filter() selecciona registros con stock menor a 5 y find() devuelve el primer producto que coincide.

reduce() acumula el valor de cada registro: precio multiplicado por stock. El arreglo original no se modifica.

Archivo: [solucion.js](solucion.js).
