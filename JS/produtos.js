document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".menu-produtos button");
    const itens = document.querySelectorAll(".grid-produtos .item");

    function filtrarCategoria(categoria) {
        itens.forEach(item => {
            if (categoria === "todos" || item.dataset.categoria === categoria) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const categoria = botao.dataset.categoria;
            filtrarCategoria(categoria);
        });
    });

    // Ao carregar a página, mostra todos os produtos
    filtrarCategoria("todos");
});

const btnAgendar = document.getElementById("btn-agendar");
const formAgendamento = document.getElementById("form-agendamento");
const msgAgendamento = document.getElementById("msg-agendamento");

if (btnAgendar && formAgendamento) {
    // Mostra/esconde o formulário quando clicar no botão
    btnAgendar.addEventListener("click", () => {
        formAgendamento.classList.toggle("visivel");
    });

    // Valida e envia o formulário
    formAgendamento.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const servico = document.getElementById("servico").value.trim();
        const data = document.getElementById("data").value.trim();

        if (!nome || !email || !telefone || !servico || !data) {
            msgAgendamento.textContent = "Preencha todos os campos para agendar.";
            msgAgendamento.style.color = "red";
            return;
        }

        msgAgendamento.textContent = `Obrigado, ${nome}! Seu agendamento para "${servico}" foi registrado para ${data}.`;
        msgAgendamento.style.color = "green";

        formAgendamento.reset();
        formAgendamento.classList.remove("visivel");
    });
}
