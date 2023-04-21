const hamburguer = document.querySelector('.breadcrumb');
const Menu = document.querySelector('.desktop-nav');
const main = document.querySelector('#portfolio');

const form = document.forms['contact-form'];

const error = document.getElementById('mail-error');
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  Menu.classList.toggle('active');
  main.classList.toggle('blurred');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  Menu.classList.remove('active');
}));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const mail = form.email.value;

  if (mail.toLowerCase() !== mail) {
    error.hidden = false;
  } else {
    error.hidden = true;
    form.submit();
  }
});

form.addEventListener('change', () => {
  localStorage.setItem('form', JSON.stringify({
    name: form.name.value,
    email: form.email.value,
    textbox: form.textbox.value,
  }));
});

const oldform = JSON.parse(localStorage.getItem('form'));
form.name.value = oldform.name;
form.email.value = oldform.email;
form.textbox.value = oldform.textbox;