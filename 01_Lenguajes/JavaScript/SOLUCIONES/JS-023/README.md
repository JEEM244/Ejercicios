# Solución — JS-023

## Resultado esperado

Las dos consultas simuladas comienzan sin esperar una a la otra. Cuando ambas terminan, se muestran sus resultados. Si una falla, el bloque `catch` maneja el error. El bloque `finally` se ejecuta en ambos casos.

## Explicación

- `cargarGrupo()` devuelve una promesa que se cumple después de un temporizador.
- El tercer parámetro permite simular un rechazo.
- `iniciarPanel()` se declara con `async`.
- `Promise.all()` recibe las dos promesas y permite esperar sus resultados como un solo conjunto.
- `await` espera el resultado dentro de la función asíncrona.
- `try...catch...finally` separa el camino correcto, el error y el cierre.

Para probar el error, cambia `iniciarPanel()` por `iniciarPanel(true)`.

## Ejecución

~~~bash
node ejercicio.js
~~~

Archivo: [ejercicio.js](ejercicio.js).
