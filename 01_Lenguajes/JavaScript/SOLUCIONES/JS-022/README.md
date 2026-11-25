# Solución — JS-022

## Resultado esperado

Se ejecutan dos operaciones simuladas. Una cumple la promesa y la otra la rechaza. En ambas se ejecuta el bloque \`finally\`.

## Explicación

1. \`consultarEstado()\` devuelve una nueva instancia de \`Promise\`.
2. \`setTimeout()\` simula una espera.
3. \`resolve()\` comunica el resultado correcto.
4. \`reject()\` comunica un error mediante un objeto \`Error\`.
5. \`then()\` procesa el resultado, \`catch()\` maneja el rechazo y \`finally()\` se ejecuta al terminar.

Los dos procesos se inician sin que uno tenga que esperar al otro.

## Ejecución

~~~bash
node ejercicio.js
~~~

Archivo: [ejercicio.js](ejercicio.js).
