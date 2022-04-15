const hamburger = document.getElementById('menuBtn');
const quitBtn = document.querySelector('.btnClose');
const menuPopup = document.getElementById('menu-bar');
const menuItems = document.querySelectorAll('.menu-item');

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
  menuPopup.classList.add('menuPopup');
  menuPopup.classList.remove('hidden');
  
  menuPopup.appendChild(quitBtn);
  menuItems.forEach(item => {menuPopup.appendChild(item);
    item.addEventListener('click', closePopup)
  });
  quitBtn.addEventListener('click', closePopup);
}

hamburger.addEventListener('click', menuDisplay);

// speakers cards //

const cards = document.querySelector('.container-article');

const speakers = [
  {
    id: 'card1',
    soloist: 'Hilary Hahn',
    photo: './images/speaker_01.png',
    power: 'sfffsgg',
    description: ' She has performed throughout the world as a soloist with leading orchestras and conductors and as a recitalist. ',
  },

  {
    id: 'card2',
    speaker: 'Yuja Wang',
    photo: './images/speaker_02.png',
    power: 'sfffsgg',
    description: 'is a Chinese classical pianist. She was born in Beijing, began studying piano there at age six, and went on to study at the Central Conservatory of Music in Beijing.',
  },

  {
    cardid: 'card3',
    speaker: 'Pacho flores',
    photo: './images/speaker_03..png',
    power: 'sfffsgg',
    description: 'Pacho Flores was awarded First Prize in the “Maurice André” International Contest, the most renowned trumpet Contest in the world.',
  },

  {
    cardid: 'card4',
    speaker: 'Mischa Maisky',
    photo: './images/speaker_04.png',
    power: 'sfffsgg',
    description: 'He was taught by Mstislav Rostropovich at the Moscow Conservatory from 1966 to 1970. In 1966, he won sixth prize at the in the most famous Cello contest.',
  },

  {
    cardid: 'card5',
    speaker: 'Manuel Barrueco',
    photo: './images/speaker_05.png',
    power: 'sfffsgg',
    description: 'Manuel Barrueco is a Cuban classical guitarist. During three decades of concert performances he has performed and recorded across the United States ',
  },

  {
    cardid: 'card6',
    speaker: 'itzhak perlman',
    photo: './images/speaker_06.png',
    power: 'sfffsgg',
    description: 'Is an Israeli-American violinist, conductor, and music teacher. Perlman has performed worldwide, and throughout the United States',
  },
];

const Card = ({
  speaker, photo, description, id, power}) => 
  `<div class="list-item-speaker" id= "${id}">
    <ul> 
      <li><img src="${photo}" alt="${speaker}" class="cards-img"></li>
    </ul>
    <ul> 
      <li>${speaker}</li>
      <li class="text1 cocogoose">${power}</li>
      <li class="text2 lato">${description}</li>
    </ul>
</div>`;

speakers.forEach((heroe) => {
  cards.insertAdjacentHTML('afterbegin', Card(heroe));
});

