const menuButton = document.getElementById('menuBtn');
const imgCross = document.getElementById('imgBtn');
const menuPopup = document.getElementById('menu-bar');
const menuItems = document.querySelectorAll('.menu-item');

function closePopup () {
  imgCross.src = "./images/mobile_menu.png";
  menuButton.classList.remove('btnposition');
  menuPopup.classList.remove ('menuPopup');
}

function menuDisplay () {
  imgCross.src = './images/close_mobile_menu.png';
  menuButton.classList.add('btnposition')
  menuPopup.classList.add ('menuPopup');
  menuItems.forEach(item => {menuPopup.appendChild(item);
    item.addEventListener('click', closePopup)
  });
  menuButton.addEventListener('click', closePopup);
}

menuButton.addEventListener('click', menuDisplay);
