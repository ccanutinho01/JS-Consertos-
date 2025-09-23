
// Botão para mostrar/esconder texto extra
const btnMostrar = document.getElementById("btn-mostrar");
const textoExtra = document.getElementById("texto-extra");

if (btnMostrar && textoExtra) {
    btnMostrar.addEventListener("click", () => {
        const estaVisivel = textoExtra.classList.toggle("visivel");

        // Troca o texto do botão dinamicamente
        btnMostrar.textContent = estaVisivel ? "Mostrar menos" : "Mostrar mais";
    });
}
