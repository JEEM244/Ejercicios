# Solution — JS-002

## Output

~~~text
Product: Cuaderno
Original price type: string
Subtotal: 375
Did price conversion produce NaN? false
~~~

## Explanation

precioTexto and unidadesTexto are strings. Number() converts their contents to numbers so multiplication is a numeric operation.

typeof checks the original type. Number.isNaN() checks whether the result is the special NaN value.

Try Number("data") to observe an invalid conversion.

File: [solucion.js](solucion.js).
