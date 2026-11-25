export function limpiarNombre(nombre) {
    return nombre.trim();
}

export default function crearBienvenida(nombre) {
    return "¡Bienvenido/a, " + nombre + "! Ya puedes comenzar a practicar.";
}
