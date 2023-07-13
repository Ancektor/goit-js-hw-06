const validation = document.querySelector('#validation-input');

validation.addEventListener('blur', () => {
  const expectedLength = parseInt(validation.getAttribute('data-length'));
  const inputLength = validation.value.length;

  validation.classList.remove('valid', 'invalid');

  if (inputLength === expectedLength) {
    validation.classList.add('valid');
  } else {
    validation.classList.add('invalid');
  }
});
