# Solución — JS-009

## Salida esperada

~~~text
Limpio: JavaScript Web
Normalizado: javascript web
Mayúsculas: JAVASCRIPT WEB
¿Incluye javascript? true
Primera palabra: JavaScript
~~~

El texto original conserva los espacios iniciales y finales. La salida anterior muestra las versiones generadas a partir de él.

## Explicación

trim() elimina los espacios de los extremos. toLowerCase() y toUpperCase() crean versiones con diferente uso de mayúsculas. includes() devuelve un booleano y slice() extrae la primera palabra.

La cadena original no se modifica.

Archivo: [solucion.js](solucion.js).
