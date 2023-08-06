const validationInput = document.querySelector('#validation-input');
const inputLength = validationInput.getAttribute('data-length');
console.log(inputLength);

validationInput.addEventListener('blur', onValidInputBlur);

function onValidInputBlur(event) {
  if (event.currentTarget.value.length == inputLength) {
    validationInput.classList.add('valid');
  } else validationInput.classList.add('invalid');
  console.log(validationInput.id);
}
