const hamburger = document.getElementById('menuBtn');
const quitBtn = document.querySelector('.btnClose');
const menuPopup = document.getElementById('menu-bar');
const menuItems = document.querySelectorAll('.menu-item');

menuPopup.classList.add('hidden');

function closePopup() {
  hamburger.classList.toggle('hidden');
  quitBtn.classList.toggle('hidden');
  menuItems.forEach((item) => { menuPopup.remove(item); });
  menuPopup.classList.toggle('hidden');
}

function menuDisplay() {
  hamburger.classList.toggle('hidden');
  quitBtn.classList.toggle('hidden');
  menuPopup.classList.add('menuPopup');
  menuPopup.classList.remove('hidden');

  menuPopup.appendChild(quitBtn);
  menuItems.forEach((item) => {
    menuPopup.appendChild(item);
    item.addEventListener('click', closePopup);
  });
  quitBtn.addEventListener('click', closePopup);
}

hamburger.addEventListener('click', menuDisplay);

// speakers cards //

const cards = document.querySelector('.container-article');

const speakers = [
  {
    id: 'card1',
    soloist: 'Captain Marvel',
    photo: './images/speaker_01.png',
    power: 'Enhanced Physical Abilities.',
    description: "Captain Carol Danvers is a former United States Air Force pilot who, upon destroying the Lightspeed Engine made by her mentor Mar-Vell, was exposed to the Tesseract's energy, gaining cosmic powers and was abducted to serve the Kree Empire.",
  },

  {
    id: 'card2',
    speaker: 'Green Lantern',
    photo: './images/speaker_02.png',
    power: 'Power Ring',
    description: 'Green Lantern is the alias of several fictional superheroes of the DC Universe, from the DC Comics publisher, which are characterized by carrying a ring of power and having the ability to create manifestations of solid light with said rings.',
  },

  {
    cardid: 'card3',
    speaker: 'Doctor Strange',
    photo: './images/speaker_03..png',
    power: 'Magic to control the multiverse',
    description: "Doctor Strange serves as the Sorcerer Supreme, Earth's foremost protector against magical and mystical threats.",
  },

  {
    cardid: 'card4',
    speaker: 'Spiderman',
    photo: './images/speaker_04.png',
    power: 'Spider powers',
    description: 'is a superhero who uses his superhuman abilities, reminiscent of a spider , to combat other supervillains who pursue sinister ends.',
  },

  {
    cardid: 'card5',
    speaker: 'Iron Man',
    photo: './images/speaker_05.png',
    power: 'As Tony Stark: Genius level intellect, scientific expert and engineer. As Iron Man: Superhuman strength and durability, supersonic flight.',
    description: 'Iron Man is a superhero who appears in American comics published by Marvel Comics. The character was co-created by writer-editor Stan Lee, developed by screenwriter Larry Lieber, and designed by artists Don Heck and Jack Kirby.',
  },

  {
    cardid: 'card6',
    speaker: 'Thor',
    photo: './images/speaker_06.png',
    power: 'Superhuman strength, and longevity. Abilities through Mjolnir: Interdimensional Teleportation. Electrical manipulation. Flight. Time manipulation.',
    description: 'Thor Odinson is the God of Thunder, former King of New Asgard, and a founding member of the Avengers. When his irresponsible behavior threatened the Asgardians to enter another war with the Frost Giants, he was stripped of his power and banished to Earth by his father, Odin.',
  },
];

const Card = ({
  speaker, photo, description, id, power,
}) => `<div class="list-item-speaker" id= "${id}">
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
