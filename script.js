
const hamburguer = document.querySelector('.toggle');
const Menu = document.querySelector('.menu2');
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  Menu.classList.toggle('active');
});

document.querySelectorAll('.item').forEach((n) => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  main.classList.remove('active');
}));