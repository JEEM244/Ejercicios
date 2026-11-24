// JS-008: Transformar y filtrar datos

const calificaciones = [85, 62, 94, 70, 58];

const calificacionesExtra = calificaciones.map((calificacion) => calificacion + 5);
const aprobatorias = calificaciones.filter((calificacion) => calificacion >= 70);
const primeraBaja = calificaciones.find((calificacion) => calificacion < 60);
const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
const promedio = suma / calificaciones.length;

console.log("Con puntos extra:", calificacionesExtra);
console.log("Aprobatorias:", aprobatorias);
console.log("Primera menor a 60:", primeraBaja);
console.log("Promedio:", promedio);
