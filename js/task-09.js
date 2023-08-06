const colorDescr = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBtnClick() {
  colorDescr.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = colorDescr.innerHTML;
}

changeColorBtn.addEventListener('click', onChangeColorBtnClick);
