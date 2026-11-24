// JS-010: Crear y modificar objetos

const libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    disponible: true,
    categoria: "Novela",
    editorial: {
        nombre: "Rey"
    },
    descripcion() {
        return "Libro: " + this.titulo + " — Autor: " + this.autor;
    }
};

const propiedadAutor = "autor";

libro.disponible = false;

console.log("Título:", libro.titulo);
console.log("Autor:", libro[propiedadAutor]);
console.log("Descripción:", libro.descripcion());
console.log("Disponible:", libro.disponible);
console.log("Categoría:", libro.categoria);
console.log("Editorial:", libro.editorial.nombre);
