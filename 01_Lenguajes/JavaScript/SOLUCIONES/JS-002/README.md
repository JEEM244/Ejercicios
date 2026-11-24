# Solución — JS-002

## Resultado

~~~text
Producto: Cuaderno
Tipo del precio original: string
Subtotal: 375
¿La conversión del precio produjo NaN? false
~~~

## Explicación

precioTexto y unidadesTexto son cadenas. Number() convierte sus contenidos a números para que la multiplicación sea una operación numérica.

typeof permite revisar el tipo original. Number.isNaN() comprueba si el resultado es el valor especial NaN.

Prueba Number("dato") para observar una conversión no válida.

Archivo: [solucion.js](solucion.js).
