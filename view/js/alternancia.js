// Seleciona o ícone de alternância de tema
const themeToggle = document.querySelector('.theme-toggle');

// Função para alternar tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Atualiza o ícone conforme o tema
    if (body.classList.contains('dark-theme')) {
        themeToggle.classList.add('dark');
    } else {
        themeToggle.classList.remove('dark');
    }
}

// Adiciona o evento de clique ao ícone de alternância de tema
themeToggle.addEventListener('click', toggleTheme);

// Inicializa o tema claro por padrão
document.body.classList.add('light-theme');
