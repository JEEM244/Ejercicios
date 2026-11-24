# Solution — JS-009

## Expected output

~~~text
Original:   JavaScript Web
Limpio: JavaScript Web
Normalizado: javascript web
Mayúsculas: JAVASCRIPT WEB
¿Incluye javascript? true
Primera palabra: JavaScript
~~~

The sample console labels remain in Spanish to match the source code.

## Explanation

trim() removes spaces at the beginning and end. toLowerCase() and toUpperCase() create versions with different casing. includes() returns a boolean and slice() extracts the first word.

The original string is not modified.

File: [solucion.js](solucion.js).
