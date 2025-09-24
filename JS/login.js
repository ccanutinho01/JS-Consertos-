const formLogin = document.getElementById("form-login");
const msgLogin = document.getElementById("msg-login");

if (formLogin) {
    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (usuarioEncontrado) {
    msgLogin.textContent = "Login realizado com sucesso!";
    msgLogin.style.color = "green";
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
    } else {
        msgLogin.textContent = "Usuário ou senha incorretos.";
        msgLogin.style.color = "red";
}

    
        if (usuario === "admin" && senha === "1234") {
            msgLogin.textContent = "Login realizado com sucesso!";
            msgLogin.style.color = "green";

         
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            msgLogin.textContent = "Usuário ou senha incorretos.";
            msgLogin.style.color = "red";
        }
    });
}
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

if (usuarioEncontrado) {
    // Salva o usuário logado no localStorage
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

    msgLogin.textContent = "Login realizado com sucesso!";
    msgLogin.style.color = "green";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
} else {
    msgLogin.textContent = "Usuário ou senha incorretos.";
    msgLogin.style.color = "red";
}
const paginaDestino = localStorage.getItem("paginaDestino");

if (paginaDestino) {
    localStorage.removeItem("paginaDestino");
    window.location.href = paginaDestino;
} else {
    window.location.href = "index.html";
}
