import { cardFire, cardForest, cardRain, cardStore } from "./elements.js";

export const woodsAudio = new Audio('./assets/Floresta.wav');
export const rainAudio = new Audio('./assets/Chuva.wav');
export const coffeeShopAudio = new Audio('./assets/Cafeteria.wav');
export const fireplaceAudio = new Audio('./assets/Lareira.wav');
export const kitchenAudio = new Audio('./assets/kitchen-timer.mp3');

function musicWoodOn() {
  woodsAudio.loop = true;
  woodsAudio.play();
}

function musicRainOn() {
  rainAudio.loop = true;
  rainAudio.play();
}

function musicShopOn() {
  coffeeShopAudio.loop = true;
  coffeeShopAudio.play();
}

function musicFireplaceOn() {
  fireplaceAudio.loop = true;
  fireplaceAudio.play();
}

cardForest.addEventListener('click', () => {
   if(cardForest.classList.contains("clicked")) {
    cardForest.classList.remove('clicked');
    woodsAudio.pause();
    return;
  };

  cardForest.classList.add('clicked');
  musicWoodOn();
})

cardRain.addEventListener('click', () => {
  if(cardRain.classList.contains('clicked')) {
    cardRain.classList.remove('clicked');
    rainAudio.pause();
    return;
  };

  cardRain.classList.add('clicked')
  musicRainOn();
});

cardStore.addEventListener('click', () => {
  if(cardStore.classList.contains('clicked')) {
    cardStore.classList.remove('clicked');
    coffeeShopAudio.pause();
    return;
  };

  cardStore.classList.add('clicked');
  musicShopOn();
});

cardFire.addEventListener('click', () => {
  if(cardFire.classList.contains('clicked')) {
    cardFire.classList.remove('clicked');
    fireplaceAudio.pause();
    return;
  };

  cardFire.classList.add('clicked');
  musicFireplaceOn();
});