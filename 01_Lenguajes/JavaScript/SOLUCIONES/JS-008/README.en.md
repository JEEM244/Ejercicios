# Solution — JS-008

## Expected output

~~~text
Con puntos extra: [ 90, 67, 99, 75, 63 ]
Aprobatorias: [ 85, 94, 70 ]
Primera menor a 60: 58
Promedio: 73.8
~~~

The sample console labels remain in Spanish to match the source code.

## Explanation

- map() creates a new array with 5 points added.
- filter() keeps grades that match the condition.
- find() returns the first match.
- reduce() accumulates the sum. Then it is divided by length to calculate the average.

The original array stays unchanged.

File: [solucion.js](solucion.js).
