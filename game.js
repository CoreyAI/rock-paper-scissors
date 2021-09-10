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
    
    // Filters player input to lower case for proper conditional checks.
    playerSelection = playerSelection.toLowerCase();

    // Logic used to return game-state conditions.
    if (playerSelection === computerSelection) {
        return "tied!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            return `You win, ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    }

}

// Main function used to initiate the game.
function game() {
    // Initialize the player score counter.
    let playerScore = 0, computerScore = 0;
    
    // Core loop to process 5 rounds of the game.
    for (let i = 1; i <= 5; i++) {
        
        // Initialize player and computer selection for following loop.
        let playerSelection = "", computerSelection = "";
        
        // Loop ensures that the player inputs the proper value to commence the game.
        while (true) {
            playerSelection = prompt(`Round ${i}: Choose "rock", "paper", or "scissors"`);
            playerSelection = playerSelection.toLowerCase();
            if ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")) {
                console.log("Please choose a valid selection");
                continue;          
            }
            computerSelection = computerPlay();
            break;
        }

        // Calls the playRound function and stores the end-game string into a variable
        // and prints results to the console.
        let round = playRound(playerSelection, computerSelection);
        console.log(round);

        // Scans through the end-game string to properly tally a win for either player
        // or comuter.
        if (round.includes('win') == true) {
            playerScore ++;
        } else if (round.includes('lose') == true) {
            computerScore ++;
        }

        // Prints the current results of the 5 game series.
        console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    }

    // Prints the final result of the game.
    if (playerScore > computerScore) {
        console.log(`Player wins!`);
    } else if (playerScore < computerScore) {
        console.log(`Computer wins!`);
    } else {
        console.log(`Game is tied!`);
    }
}

// Initializes the game.
game();

