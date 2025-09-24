const formCadastro = document.getElementById("form-cadastro");
const msgCadastro = document.getElementById("msg-cadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const confirmarSenha = document.getElementById("confirmar-senha").value.trim();

        if (!nome || !email || !usuario || !senha || !confirmarSenha) {
            msgCadastro.textContent = "Por favor, preencha todos os campos.";
            msgCadastro.style.color = "red";
            return;
        }

        if (senha !== confirmarSenha) {
            msgCadastro.textContent = "As senhas não conferem.";
            msgCadastro.style.color = "red";
            return;
        }

        // Simulação de cadastro (armazenando no localStorage)
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuarioExistente = usuarios.find(u => u.usuario === usuario);

        if (usuarioExistente) {
            msgCadastro.textContent = "Este nome de usuário já está em uso.";
            msgCadastro.style.color = "red";
            return;
        }

        usuarios.push({ nome, email, usuario, senha });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        msgCadastro.textContent = "Cadastro realizado com sucesso!";
        msgCadastro.style.color = "green";

        // Redireciona para login depois de 1,5s
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);
    });
}
