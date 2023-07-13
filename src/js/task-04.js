let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const Span = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  Span.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  Span.textContent = counterValue;
});