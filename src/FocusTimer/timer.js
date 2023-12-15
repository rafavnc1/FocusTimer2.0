import state from './state.js';
import * as elements from './elements.js';
import { stop, disableButtons } from './actions.js';
import { kitchenAudio } from './sounds.js';


export let minutes;
export let seconds;

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, '0');
  elements.seconds.textContent = String(seconds).padStart(2, '0');
}

export function countdown() {
  clearTimeout(state.countdownId)

  if(!state.isRunning) {
    return;
  }
  
  minutes = Number(elements.minutes.textContent);
  seconds = Number(elements.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  };

  if(minutes < 0) {
    stop();
    kitchenAudio.play()
    disableButtons(false, false)
    return;
  }

  updateDisplay(minutes, seconds);

  state.countdownId = setTimeout(() => countdown(), 1000);
}

export function incrementMinutes() {
  state.minutes = state.minutes + 5;

  if (state.minutes > 5) {
    disableButtons(false, false)
  } if (state.minutes >= 60) {
    state.minutes = 60;
    disableButtons(true, false);
  }

  updateDisplay();
}

export function decrementMinutes() {
  state.minutes = state.minutes - 5;

  if (state.minutes <= 5) {
    state.minutes = 5;
    disableButtons(false, true);
  } if (state.minutes >= 55) {
    disableButtons(false, false)
  }
  updateDisplay();
}