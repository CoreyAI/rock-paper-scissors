// Declaring all DOM selectors.
const buttons = document.querySelectorAll("button");
const pScore = document.querySelector("#scorePlayer");
const cScore = document.querySelector("#scoreComputer");
const gameStatus = document.querySelector('#status');


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

function calcGameScore(roundResult) {
    let newElement = document.createElement("div");
    if (roundResult.includes('win') == true) {
        playerScore ++;
        newElement.textContent = `Player = ${playerScore}`;
        pScore.replaceChild(newElement, pScore.firstElementChild);
    } else if (roundResult.includes('lose') == true) {
        computerScore ++;
        newElement.textContent = `Computer = ${computerScore}`;
        cScore.replaceChild(newElement, cScore.firstElementChild);
    }
}

function endGameScore(playerScore, computerScore) {
    let newElement = document.createElement("div");
    if (playerScore > computerScore) {
        newElement.textContent = 'Player Wins!';
        gameStatus.replaceChildren(newElement);
        console.log(`Player wins!`);
    } else if (playerScore < computerScore) {
        newElement.textContent = 'Computer Wins!';
        gameStatus.replaceChildren(newElement);
        console.log(`Computer wins!`);
    } else {
        newElement.textContent = 'Game is Tied!';
        gameStatus.replaceChildren(newElement);
        console.log(`Game is tied!`);
    }
}

// Main function used to initiate the game.
let playerScore = 0, computerScore = 0, roundCount = 1;

function game(e) {

    // Checks the start of the game to ensure no more than 5 rounds were played.
    if (roundCount >= 6) {
        return;
    }
    
    // 
    let computerSelection = computerPlay();
    let playerSelection = this.id;
    
    // Calls the playRound function and stores the end-game string into a variable
    // and prints results to the console.
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    // Scans through the end-game string to properly tally a win for either player
    // or comuter.
    calcGameScore(roundResult);

    // Prints the current results of the 5 game series.
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    
    // Prints the final result of the game.
    if (roundCount == 5) {
        endGameScore(playerScore, computerScore)
    }
    roundCount ++;
}


// Initializes the game.
// game();

buttons.forEach(button => {
    button.addEventListener('click', game);
});



