const guesses = document.querySelector('input');
const gameButton = document.querySelector('#game-button');
const resetButton = document.querySelector('#reset-button');
const hintButton = document.querySelector('#hint-button');
const entriesList = document.querySelector('ul');
const h2 = document.querySelector('h2');
const remainingGueses = document.querySelector('remainingGueses');

let winningNum = Math.floor(Math.random() * 100) + 1;
console.log(winningNum);
let remainingAttempts = 10;

gameButton.addEventListener("click", function () {
    const guessValue = guesses.value;
    let guess = parseInt(guesses.value);

    if (isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
        h2.textContent = "Invalid guess!";
    } else if (winningNum == guessValue) {  
        h2.textContent = `You are correct, the winning number was ${winningNum}!`;
        guesses.disabled = true;
        gameButton.disabled = true;
    } else {
        remainingAttempts--;
        if (remainingAttempts === 0) {
            h2.textContent = `You lose! The winning number was ${winningNum}!`;
            guesses.disabled = true;
            gameButton.disabled = true;
        } else if (guess < winningNum) {
            h2.textContent = `Guess higher! Attempts remaining: ${remainingAttempts}`;
        } else {
            h2.textContent = `Guess lower! Attempts remaining: ${remainingAttempts}`;
        }
    }

    const numList = document.createElement('li')
    numList.textContent = guesses.value;
    entriesList.appendChild(numList);
});

resetButton.addEventListener("click", function () {
    winningNum = Math.floor(Math.random() * 100) + 1;
    remainingAttempts = 10;
    h2.textContent = "";
    guesses.value = "";
    guesses.disabled = false;
    gameButton.disabled = false;
});