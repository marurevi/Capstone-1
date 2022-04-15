const hamburger = document.getElementById('menuBtn');
const quitBtn = document.querySelector('.btnClose');
const menuPopup = document.getElementById('menu-bar');
const menuItems = document.querySelectorAll('.menu-item');
//menuPopup.className ='menuPopup';
menuPopup.classList.add ('hidden');

function closePopup () {
  hamburger.classList.toggle('hidden');
  quitBtn.classList.toggle('hidden');
  menuItems.forEach(item => {menuPopup.remove(item)});
  menuPopup.classList.toggle('hidden');
}

function menuDisplay () {
  hamburger.classList.toggle('hidden');
  quitBtn.classList.toggle('hidden');
  //menuPopup.classList.toggle('hidden');
  menuPopup.appendChild(quitBtn);
  menuItems.forEach(item => {menuPopup.appendChild(item);
    item.addEventListener('click', closePopup)
  });
  quitBtn.addEventListener('click', closePopup);
}

hamburger.addEventListener('click', menuDisplay);



