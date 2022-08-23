// variaveis
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    handleResetClick();
  }
});
// funções callback

function handleTryClick(event) {
  event.preventDefault();

  // o padrao do form
  // é enviar o formulario, e eu nao quero enviar
  // o formulario , por isso uso preventDefault
  // que significa: nao faça o padrao
  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    document.querySelector(
      '.screen2 h2'
    ).innerText = `voce acertou em ${xAttempts} tentativas`;
  }
  inputNumber.value = '';
  xAttempts++;
}

function handleResetClick() {
  screen1.classList.remove('hide');
  screen2.classList.add('hide');
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
