const colorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
