const button = document.getElementById('actionBtn');
const message = document.getElementById('message');
let clicked = false;

button.addEventListener('click', () => {
  clicked = !clicked;

  message.textContent = clicked
    ? 'Pega no meu Perú!'
    : 'Aperte o botão para ter uma surpresa!';
});