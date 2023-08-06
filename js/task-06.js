const validationInput = document.querySelector('#validation-input');
const inputLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', onValidInputBlur);
validationInput.addEventListener('focus', onValidInputFocus);

function onValidInputBlur(event) {
  if (event.currentTarget.value.length == inputLength) {
    validationInput.classList.add('valid');
  } else validationInput.classList.add('invalid');
  if (event.currentTarget.value.length != inputLength) {
    validationInput.classList.add('invalid');
  }
}

function onValidInputFocus(event) {
  validationInput.removeAttribute('class');
}
