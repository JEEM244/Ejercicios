const valor = document.querySelector("#valor");
const botonAumentar = document.querySelector("#aumentar");
const botonDisminuir = document.querySelector("#disminuir");
const botonReiniciar = document.querySelector("#reiniciar");

let contador = 0;

function actualizarContador() {
    valor.textContent = contador;
}

botonAumentar.addEventListener("click", () => {
    contador++;
    actualizarContador();
});

botonDisminuir.addEventListener("click", () => {
    contador--;
    actualizarContador();
});

botonReiniciar.addEventListener("click", () => {
    contador = 0;
    actualizarContador();
});
