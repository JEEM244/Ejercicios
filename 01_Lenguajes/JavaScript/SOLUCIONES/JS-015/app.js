const entrada = document.querySelector("#entrada");
const previa = document.querySelector("#previa");
const contador = document.querySelector("#contador");

entrada.addEventListener("input", () => {
    const texto = entrada.value;

    if (texto.length === 0) {
        previa.textContent = "Tu texto aparecerá aquí";
    } else {
        previa.textContent = texto;
    }

    contador.textContent = texto.length;
});
