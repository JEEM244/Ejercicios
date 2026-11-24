// JS-006: Funciones y valores de retorno

function calcularArea(ancho, alto) {
    return ancho * alto;
}

function crearResumen(nombre, ancho, alto) {
    const area = calcularArea(ancho, alto);
    return `${nombre}, el área del rectángulo es ${area} unidades cuadradas.`;
}

const area = calcularArea(5, 3);

console.log("Área:", area);
console.log(crearResumen("Alex", 5, 3));
