import { sumar, promedio } from "./modulos/operaciones.js";

const formulario = document.querySelector("#formulario");
const campoA = document.querySelector("#numero-a");
const campoB = document.querySelector("#numero-b");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const textoA = campoA.value.trim();
    const textoB = campoB.value.trim();
    const numeroA = Number(textoA);
    const numeroB = Number(textoB);

    if (textoA === "" || textoB === "" ||
        !Number.isFinite(numeroA) || !Number.isFinite(numeroB)) {
        resultado.textContent = "Escribe dos números válidos.";
        return;
    }

    resultado.textContent =
        "Suma: " + sumar(numeroA, numeroB) +
        " | Promedio: " + promedio(numeroA, numeroB);
});
