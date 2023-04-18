const hamburguer = document.querySelector('.breadcrumb');
const navMenu = document.querySelector('.desktop-nav');
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});