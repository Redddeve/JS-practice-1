const inputName = document.querySelector('#name-input');
const nameSpan = document.querySelector('#name-output');

function changeName(event) {
  nameSpan.textContent = inputName.value;
  if (inputName.value === '') {
    nameSpan.textContent = 'Anonymous';
  }
  //   nameSpan.textContent = event.currentTarget.value; //* var 2
  //   if (event.currentTarget.value === '') {
  //     nameSpan.textContent = 'Anonymous';
  //   }
}

inputName.addEventListener('input', changeName);
