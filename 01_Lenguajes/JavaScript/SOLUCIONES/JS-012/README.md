# Solución — JS-012

## Salida esperada

~~~text
Total: 60
Alumno: Mara
Aviso: Revisa tus ejercicios.
~~~

## Errores corregidos

1. **Acumulación incorrecta:** total = precio reemplazaba el total en cada vuelta. Se corrigió por total += precio.
2. **Nombre mal escrito:** usuairo no existe. El parámetro se llama usuario, así que se usa usuario.nombre.
3. **Alcance de bloque:** mensaje se declaró dentro del if y no podía leerse después. Se declaró con let dentro de la función y se asignó en el bloque.

## Forma de depurarlo

Ejecuta el archivo y observa el valor del total. Después corrige el primer problema y vuelve a ejecutar. Continúa con el ReferenceError y finalmente con el mensaje que queda fuera de alcance.

Archivo: [solucion.js](solucion.js).
