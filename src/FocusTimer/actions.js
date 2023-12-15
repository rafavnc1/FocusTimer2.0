
import state from "./state.js";
import * as timer from './timer.js';
import { btnPlus, btnMinus } from "./elements.js";

function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');
}

export function disableButtons(plus, minus) {
  btnPlus.disabled = plus;
  btnMinus.disabled = minus;
}

export function play() {
  toggleRunning();
  disableButtons(true, true);

  timer.countdown();
}

export function pause() {
  toggleRunning();
  disableButtons(false,false);
};

export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  if(state.minutes >= 60) {
    disableButtons(true, false)
  } else if (state.minutes <= 5) {
    disableButtons(false, true)
  } else {
    disableButtons(false, false)
  }

  timer.updateDisplay();
}

export function plus() {
  timer.incrementMinutes();
}

export function minus() {
  timer.decrementMinutes();
}

