function playRound(playerSelection, computerSelection) {
    if (playerSelection = computerSelection) {
       return "It's a draw!";
    }

    else if (playerSelection = "rock" && computerSelection = "paper") {
        return "You Lose! Paper beats Rock";
    }

    else if (playerSelection = "rock" && computerSelection = "scissors") {
        return "You Win! Rock beats Scissors!"
    }
    
   
  }
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

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

