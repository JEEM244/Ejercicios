// JS-011: Procesar un arreglo de objetos

const productos = [
    { nombre: "Mouse", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 600, stock: 4 },
    { nombre: "Monitor", precio: 1800, stock: 8 }
];

const nombres = productos.map((producto) => producto.nombre);
const existenciasBajas = productos.filter((producto) => producto.stock < 5);
const teclado = productos.find((producto) => producto.nombre === "Teclado");
const valorTotal = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
);

console.log("Nombres:", nombres);
console.log("Existencias bajas:", existenciasBajas.map((producto) => producto.nombre));
console.log("Teclado encontrado:", teclado.nombre);
console.log("Valor total:", valorTotal);
