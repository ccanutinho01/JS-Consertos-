document.addEventListener("DOMContentLoaded", () => {
    const boasVindas = document.getElementById("boas-vindas");
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuarioLogado) {
        boasVindas.textContent = `👋 Bem-vindo, ${usuarioLogado.nome}!`;
        boasVindas.style.fontSize = "1.2rem";
        boasVindas.style.fontWeight = "bold";
        boasVindas.style.margin = "10px";
    } else {
        boasVindas.textContent = "Você não está logado.";
        boasVindas.style.color = "gray";
    }
});
const btnLogout = document.getElementById("btn-logout");

if (btnLogout) {
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado");
        window.location.reload(); // Recarrega a página sem o usuário logado
    });
}
