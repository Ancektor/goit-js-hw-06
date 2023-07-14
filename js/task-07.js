const size = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

size.addEventListener('input', () => {
  const fontSize = size.value;
  text.style.fontSize = `${fontSize}px`;
});
