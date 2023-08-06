const fontSizeRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeRange.addEventListener('input', onFontChange);

function onFontChange(event) {
  textSpan.style.fontSize = `${event.target.value}px`;
}
