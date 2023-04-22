const hamburguer = document.querySelector('.breadcrumb');
const Menu = document.querySelector('.desktop-nav');
const main = document.querySelector('#portfolio');

const form = document.forms['contact-form'];

const error = document.getElementById('mail-error');

const popup = document.querySelector('#popup-display');
const projects = [
  {
    name: 'Tonic',
    duetimes: { place: 'Canopy', ocupation: 'Back end Dev', time: '2015' },
    img_url: 'images/Snapshoot-Portfolio.png',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting 
       industry. Lorem Ipsum has been the industry's standard dummy text ever 
       since the 1500s, when an unknown printer took a galley of type and 
       scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.\n</br></br>
       Lorem Ipsum has been the industry's standard dummy text ever since 
       the 1500s, when an unknown printer took a galley of type and scrambled it 
       1960s with the releorem Ipsum is simply dummy text of the printing and 
       typesetting industry. Lorem Ipsum han printer took a galley of type and 
       scrambled it 1960s with the releawn printer took a galley of type and 
       scrambled it 1960s.`,
    techTags: '<li><a href="#">HTML</a></li>\n<li><a href="#">CSS</a></li>\n<li><a href="#">JavaScript</a></li>\n<li class="mob-li" ><a href="#">Ruby</a></li>\n<li class="mob-li"><a href="#">Bootstrap</a></li>',
    linkLive: 'https://kirube1992.github.io/new-portfolio/',
    linkSource: 'https://github.com/kirube1992/new-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    duetimes: { place: 'Canopy', ocupation: 'Back end Dev', time: '2015' },
    img_url: 'images/snapportfolio2.png',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting 
       industry. Lorem Ipsum has been the industry's standard dummy text ever 
       since the 1500s, when an unknown printer took a galley of type and 
       scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.\n</br></br>
       Lorem Ipsum has been the industry's standard dummy text ever since 
       the 1500s, when an unknown printer took a galley of type and scrambled it 
       1960s with the releorem Ipsum is simply dummy text of the printing and 
       typesetting industry. Lorem Ipsum han printer took a galley of type and 
       scrambled it 1960s with the releawn printer took a galley of type and 
       scrambled it 1960s.`,
    techTags: '<li><a href="#">HTML</a></li>\n<li><a href="#">CSS</a></li>\n<li><a href="#">JavaScript</a></li>\n<li class="mob-li"><a href="#">Ruby</a></li>\n<li class="mob-li"><a href="#">Bootstrap</a></li>',
    linkLive: 'https://kirube1992.github.io/new-portfolio/',
    linkSource: 'https://github.com/kirube1992/new-portfolio',

  },
  {
    name: 'Facebook 360',
    duetimes: { place: 'Canopy', ocupation: 'Back end Dev', time: '2015' },
    img_url: 'images/snapportfolio3.png',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting 
       industry. Lorem Ipsum has been the industry's standard dummy text ever 
       since the 1500s, when an unknown printer took a galley of type and 
       scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.\n</br></br>
       Lorem Ipsum has been the industry's standard dummy text ever since 
       the 1500s, when an unknown printer took a galley of type and scrambled it 
       1960s with the releorem Ipsum is simply dummy text of the printing and 
       typesetting industry. Lorem Ipsum han printer took a galley of type and 
       scrambled it 1960s with the releawn printer took a galley of type and 
       scrambled it 1960s.`,
    techTags: '<li><a href="#">HTML</a></li>\n<li><a href="#">CSS</a></li>\n<li><a href="#">JavaScript</a></li>\n<li class="mob-li"><a href="#">Ruby</a></li>\n<li class="mob-li"><a href="#">Bootstrap</a></li>',
    linkLive: 'https://kirube1992.github.io/new-portfolio/',
    linkSource: 'https://github.com/kirube1992/new-portfolio',

  },
  {
    name: 'Uber Navigation',
    duetimes: { place: 'Canopy', ocupation: 'Back end Dev', time: '2015' },
    img_url: 'images/snapportfolio4.png',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting 
       industry. Lorem Ipsum has been the industry's standard dummy text ever 
       since the 1500s, when an unknown printer took a galley of type and 
       scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.\n</br></br>
       Lorem Ipsum has been the industry's standard dummy text ever since 
       the 1500s, when an unknown printer took a galley of type and scrambled it 
       1960s with the releorem Ipsum is simply dummy text of the printing and 
       typesetting industry. Lorem Ipsum han printer took a galley of type and 
       scrambled it 1960s with the releawn printer took a galley of type and 
       scrambled it 1960s.`,
    techTags: '<li><a href="#">HTML</a></li>\n<li><a href="#">CSS</a></li>\n<li><a href="#">JavaScript</a></li class="mob-li">\n<li><a href="#">Ruby</a></li>\n<li class="mob-li"><a href="#">Bootstrap</a></li>',
    linkLive: 'https://kirube1992.github.io/new-portfolio/',
    linkSource: 'https://github.com/kirube1992/new-portfolio',

  },
];
function showPopUp(id) {
  const project = projects[id - 1];
  popup.classList.toggle('splash');
  document.body.classList.add('popupstate');
  Menu.classList.toggle('navlinkpopupstate');
  popup.innerHTML += `
  <div class="popup pop-1 work-item-list">
    <div class="pop-header"><h2>${project.name}</h2> <a href="#" id="exit-btn">X</a></div>
  <ul class="due-time">
    <li class="company-name">${project.duetimes.place}</li>
    <li>${project.duetimes.ocupation}</li>
    <li>${project.duetimes.time}</li>
  </ul>
  <div class="popup-image">
    <img src="${project.img_url}" alt="${project.name} image">
      </div>
  <div class="info">
  <div class="text">
      
  <p>${project.text}</p>
  </div>
  <aside class="left-part">
      <ul class="tech-tags">
      ${project.techTags}
    </ul>
    <div  class="link-tags">
      <a class="bu-fl" href="${project.linkLive}" class="big-btn">See Live <img class="live-icon" src="images/Icon1.png" alt="Live Icon"></a>
      <a class="bu-fl" href="${project.linkSource}" class="big-btn">See Source <img class="live-icon" src="images/Icon -GitHub.png" alt="Github Icon"></a>
    </div>
  </aside>
  </div>
</div>`;

  const exitButton = document.getElementById('exit-btn');
  exitButton.addEventListener('click', (e) => {
    popup.classList.toggle('splash');
    document.body.classList.remove('popupstate');
    Menu.classList.toggle('navlinkpopupstate');
    popup.innerHTML = '';
    e.preventDefault();
  });
}
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

document.querySelectorAll('.project').forEach((n) => n.addEventListener('click', (e) => {
  const id = n.id.split('-').slice(-1);
  showPopUp(id);
  e.preventDefault();
}));
<<<<<<< HEAD
=======

>>>>>>> 57658462a7552d8e16a06e8fa7e5128e41e5f5ae
