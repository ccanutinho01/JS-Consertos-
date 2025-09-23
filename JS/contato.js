const form = document.getElementById("form-contato");
const msgRetorno = document.getElementById("msg-retorno");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede o recarregamento da página

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação simples
        if (!nome || !email || !mensagem) {
            msgRetorno.textContent = "Por favor, preencha todos os campos.";
            msgRetorno.style.color = "red";
            return;
        }

        // Validação de email simples (regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            msgRetorno.textContent = "Digite um e-mail válido.";
            msgRetorno.style.color = "red";
            return;
        }

        // Se tudo estiver certo:
        msgRetorno.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        msgRetorno.style.color = "green";

        // Limpar os campos
        form.reset();
    });
}
