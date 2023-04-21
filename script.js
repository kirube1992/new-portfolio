const hamburguer = document.querySelector('.breadcrumb');
const Menu = document.querySelector('.desktop-nav');
const main = document.querySelector('#portfolio');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  Menu.classList.toggle('active');
  main.classList.toggle('blurred');
});

document.querySectorAll('.nav-link').forEach((n) => n.addentListener('click', () => {
  hamburguer.classList.remove('active');
  Menu.classList.remove('active');
}));

function  showpUp(id) {	
  let project = projects[id-1]	
  popup.classList.toggle('splash');
  document.body.classList.add('popupstate')
  navMenu.classList.toggle('navlinkpopupstate')
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
  <aside>				
    <ul class="tech-tags">
      ${project.techTags}
    </ul>
    <div  class="link-tags">
      <a href="${project.linkLive}" class="big-btn">See Live <img class="live-icon" src="assets/Icon1.png" alt="Live Icon"></a>
      <a href="${project.linkSource}" class="big-btn">Source <img class="live-icon" src="assets/Icon -GitHub.png" alt="Github Icon"></a>
    </div>
  </aside>
  </div>
</div>`

  const exitButton = document.getElementById('exit-btn');
  exitButton.addEventListener('click', () => {      	
    popup.classList.toggle('splash');
    document.body.classList.remove('popupstate')
    navMenu.classList.toggle('navlinkpopupstate')
    popup.innerHTML = '';
  });
}