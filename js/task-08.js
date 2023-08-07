const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const loginData = {
    email: email.value,
    password: password.value,
  };

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled!');
  } else {
    event.currentTarget.reset();
    return console.log(loginData);
  }
  // if (email.value !== '' && password.value !== '') {
  //   console.log(loginData);
  //   event.currentTarget.reset();
  // }
}
