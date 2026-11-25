import crearBienvenida, { limpiarNombre } from "./modulos/mensajes.js";

const formulario = document.querySelector("#formulario");
const campoNombre = document.querySelector("#nombre");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = limpiarNombre(campoNombre.value);

    if (nombre === "") {
        resultado.textContent = "Escribe tu nombre para continuar.";
        campoNombre.focus();
        return;
    }

    resultado.textContent = crearBienvenida(nombre);
});
