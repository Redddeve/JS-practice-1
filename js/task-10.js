const numberInput = document.querySelector('#controls input').value;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     boxes.createElement('div');
//     console.log(i);
//   }
//   console.log('amount');
// }

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// numberInput.addEventListener('change', callback);
// createBtn.addEventListener('click', createBoxes(numberInput));
destroyBtn.addEventListener('click', destroyBoxes);
