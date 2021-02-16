'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct number";
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//event listeners

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

   
    //when ther is no input
    if(!guess) {
        displayMessage('🔴 no number');

        // when player wins
    } else if(guess === number) {
        displayMessage('🏆 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== number) {
            if(score > 1) {
                displayMessage( guess > number ? '🔼 guess is too high' : '🔽 guess is too low');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('😔 you lost');
                document.querySelector('.score').textContent = 0;
            }
           
        }
    });

/// functionality to reset the game

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});