const botoesFiltro = document.querySelectorAll('[data-filtro]');

// Seleciona todos os itens (as seções) com a classe 'item'
const itens = document.querySelectorAll('.item');

// Percorre a lista de botões para adicionar um evento de clique a cada um
botoesFiltro.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        // Pega a categoria do botão que foi clicado
        const filtro = evento.target.dataset.filtro;

        // Itera sobre cada item para decidir se ele deve ser mostrado ou escondido
        itens.forEach(item => {
            const categoriaDoItem = item.dataset.categoria;

            // Se o filtro for "todos" ou se a categoria do item for a mesma do filtro, mostra o item
            if (filtro === 'todos' || categoriaDoItem === filtro) {
                item.style.display = 'block';
            } else {
                // Caso contrário, esconde o item
                item.style.display = 'none';
            }
        });
    });
});
