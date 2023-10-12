const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
       return "It's a draw!";
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock!";
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors!";
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock!";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper!";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper!";
    }
    
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock Beats Scissors!";
    }

    else {
        return "I don't know LOL!"
    }

  }


function getComputerChoice() {
    ranNum = Math.floor(Math.random() * 3);
    
    if (ranNum == 0) {
        return "rock"
    }

    else if (ranNum == 1) {
        return "paper"
    }

    else {
        return "scissors"
    }
}

