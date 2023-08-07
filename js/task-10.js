const numberInput = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const logBtn = document.querySelector('[data-log]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', destroyBoxes);

function onCreateClick() {
  createBoxes(Number(numberInput.value));
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    if (boxes.children.length === 0) {
      div.style.width = `30px`;
      div.style.height = `30px`;
    } else {
      // if (boxes.children.length !== 0) {
      div.style.width = `${3 + boxes.children.length}0px`;
      div.style.height = `${3 + boxes.children.length}0px`;
    }
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
  numberInput.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
