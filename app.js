// Application v. 1.0 finish

let min = 1,
    max = 10,
    winningNum = getWinningNum(),
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

// Play again handler
UIgame.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInp.value);
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`, 'red');
  }

  if(guess === winningNum) {
    gameOver(true,`${winningNum} is correct! My congratualations, you win`);
  } else {
    guessesLeft--;
    if(guessesLeft === 0) {
      gameOver(false,`${guess} is not correct! You lost! The correct was ${winningNum}`);
    } else {
      guessInp.value = '';
      setMessage(`${guess} is not correct ! Try another number, you have ${guessesLeft} attempts`,'red');
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green': color = 'red';
  guessInp.disabled = true;
  guessInp.style.borderColor = color;
  setMessage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getWinningNum() {
  return Math.floor(Math.random() * ((max+1) - min)) + min;
}