// Declaring all DOM selectors.
const pScore = document.querySelector("#scorePlayer");
const cScore = document.querySelector("#scoreComputer");
const gameStatus = document.querySelector('#status');
const resetButton = document.querySelector('#resetButton');

// Scans DOM for all active button elements and adds an event listener.
function scanButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click', game);
    });
}

// Generates a random value for the computer's turn in the game.
function computerPlay() {
    
    // A random integer from 0 to 2.
    i = Math.round((Math.random() * 2));
    
    // Random integer used to determine between rock, paper, or scissors.
    switch (i) {
        case i = 0:
            return "rock";
        case i = 1:
            return "paper";
        case i = 2:
            return "scissors";
    }
}

// Plays a round of the game using player and computer input.
// Modifies HTML with apporporiate game status.
function playRound(playerSelection, computerSelection) {
    let newElement = document.createElement("div");
    if (playerSelection === computerSelection) {
        newElement.textContent = "Tied!";
        gameStatus.replaceChildren(newElement);
        return "tied!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            newElement.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
            gameStatus.replaceChildren(newElement);
            return `You win, ${playerSelection} beats ${computerSelection}!`;
    } else {
        newElement.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`
        gameStatus.replaceChildren(newElement);
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    }
}

// Updates HTML document with player's score.
function calcPlayerScore() {
    let newElement = document.createElement("div");
    newElement.textContent = `Player = ${playerScore}`;
    pScore.replaceChild(newElement, pScore.firstElementChild);
}

// Updates HTML document with computer's score.
function calcComputerScore() {
    let newElement = document.createElement("div");
    newElement.textContent = `Computer = ${computerScore}`;
    cScore.replaceChild(newElement, cScore.firstElementChild);
}

// Calculates the game's score and calls HTML modify functions.
function calcGameScore(roundResult) {
    if (roundResult.includes('win') == true) {
        playerScore ++;
        calcPlayerScore();
    } else if (roundResult.includes('lose') == true) {
        computerScore ++;
        calcComputerScore();
    }
}

// Determines the end game state and modifes HTML accordingly.
function endGameScore(playerScore, computerScore) {
    let newElement = document.createElement("div");
    if (playerScore > computerScore) {
        newElement.textContent = 'Player Wins!';
        gameStatus.replaceChildren(newElement);
    } else if (playerScore < computerScore) {
        newElement.textContent = 'Computer Wins!';
        gameStatus.replaceChildren(newElement);
    } else {
        newElement.textContent = 'Game is Tied!';
        gameStatus.replaceChildren(newElement);
    }
}

// Adds a game reset button when game is over.
function addResetButton() {
    let newButton = document.createElement("button");
    newButton.textContent = 'Reset';
    newButton.id = "reset";
    resetButton.replaceChildren(newButton);
    scanButtons();
}

// Resets game when button is activate.
function activateResetButton() {
    playerScore = 0;
    computerScore = 0;
    calcPlayerScore();
    calcComputerScore();
    removeResetButton();
}

// Removes the reset button when new game occurs.
function removeResetButton() {
    let newElement = document.createElement("div");
    newElement.textContent = 'Welcome to Rock, Paper, Scissors!';
    gameStatus.replaceChildren(newElement);
    resetButton.removeChild(resetButton.lastChild);
}

// Main function used to initiate the game.
let playerScore = 0, computerScore = 0
function game(e) {

    // Checks the start of the game to ensure no more than 5 rounds were played.
    if (this.id == 'reset') {
        activateResetButton();
        return;
    } else if ((playerScore == 5) || (computerScore == 5)) {
        return;
    }
    
    // Obtain player and computer input values.
    let computerSelection = computerPlay();
    let playerSelection = this.id;
    
    // Calls the playRound function and stores the end-game string into a variable.
    let roundResult = playRound(playerSelection, computerSelection);

    // Scans through the end-game string to properly tally a win for either player
    // or comuter.
    calcGameScore(roundResult);
    
    // Prints the final result of the game.
    if ((playerScore == 5) || (computerScore == 5)) {
        endGameScore(playerScore, computerScore)
        addResetButton();
    }
}

// Initialize the first DOM scan for button elements.
scanButtons();