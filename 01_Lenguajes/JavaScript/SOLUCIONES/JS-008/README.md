# Solución — JS-008

## Salida esperada

~~~text
Con puntos extra: [ 90, 67, 99, 75, 63 ]
Aprobatorias: [ 85, 94, 70 ]
Primera menor a 60: 58
Promedio: 73.8
~~~

## Explicación

- map() crea un nuevo arreglo con 5 puntos agregados.
- filter() conserva las calificaciones que cumplen la condición.
- find() devuelve la primera coincidencia.
- reduce() acumula la suma. Después se divide entre length para calcular el promedio.

El arreglo original no cambia.

Archivo: [solucion.js](solucion.js).
