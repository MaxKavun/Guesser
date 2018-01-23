// Application v. 1.0b

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInp = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min & max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInp.value);
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`, 'red');
  }

  if(guess === winningNum) {
    guessInp.disabled = true;
    guessInp.style.borderColor = 'green';
    setMessage(`${winningNum} is correct! My congratualations you win`, 'green');
  } else {

  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}