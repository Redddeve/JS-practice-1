let counterValue = 0;
const increaseValueBtn = document.querySelector('[data-action="increment"]');
const decreaseValueBtn = document.querySelector('[data-action="decrement"]');

function onIncreaseValueClick() {
  counterValue++;
  document.querySelector('#value').innerHTML = counterValue;
}
function onDecreaseValueClick() {
  counterValue--;
  document.querySelector('#value').innerHTML = counterValue;
}

increaseValueBtn.addEventListener('click', onIncreaseValueClick);
decreaseValueBtn.addEventListener('click', onDecreaseValueClick);

console.log(counterValue.parentNode);
