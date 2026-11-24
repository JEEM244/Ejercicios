# Solution — JS-009

## Expected output

~~~text
Limpio: JavaScript Web
Normalizado: javascript web
Mayúsculas: JAVASCRIPT WEB
¿Incluye javascript? true
Primera palabra: JavaScript
~~~

The original text keeps its leading and trailing spaces. The output above shows the versions generated from it.

## Explanation

trim() removes spaces at the beginning and end. toLowerCase() and toUpperCase() create versions with different casing. includes() returns a boolean and slice() extracts the first word.

The original string is not modified.

File: [solucion.js](solucion.js).
