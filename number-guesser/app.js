// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event addEventListener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //validate input
    if(isNaN || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check if won
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        //Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            //Game over - lost

            gameOver(false, `Game over. YOU lost. The correct number is ${winningNum}`)
        } else {
            //Game continues - answer wrong
             //Change border color
             guessInput.style.borderColor = 'red';
            //clear the input
            guessInput.value = '';
             //Tell user it's the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

function gameOver(won, msg){
    let color;

    won === true ? color = 'green' : color = 'red';
     //Disable input
     guessInput.disabled = true;
     //Change border color
     guessInput.style.borderColor = color;
     //set message
     setMessage(msg, color);

     //Play again
     guessBtn.value = 'Play Again';
     guessBtn.className += 'play-again';
}

//Get Winning number  - Random
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}