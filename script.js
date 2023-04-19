const hamburguer = document.querySelector('.breadcrumb');
const Menu = document.querySelector('.desktop-nav');
const main = document.querySelector('#portfolio');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  Menu.classList.toggle('active');
  main.classList.toggle('blurred');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  Menu.classList.remove('active');
}));
