const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const loginData = {
    email: email.value,
    password: password.value,
  };

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled!');
  }

  //   console.log(event.currentTarget.elements);
  console.log(loginData);
  event.currentTarget.reset();
}
