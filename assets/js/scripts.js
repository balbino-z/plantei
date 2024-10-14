function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('navbar-active');
}

// Adicionando evento de clique aos itens da navbar para fechar o menu colapsável
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('navbar-active'); // Fecha o menu ao clicar em um link
    });
});
