const button = document.querySelector('button');
const results = document.querySelector('div');
playerSelection = button.value;
computerSelection = getComputerChoice();

button.addEventListener('click', () => {
    game();
})

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 || computerScore < 5) {
        let roundResult = playRound(playerSelection, computerSelection);
        let lowerCase = roundResult.toLowerCase()
        if (lowerCase.includes ("win")){
            ++playerScore
        } else if (lowerCase.includes("lose")) {
            ++computerScore
        }
    }
    if (playerScore == 5) {
        results.textContent = "Congrtulations! You Win!"
    } else {
        results.textContent = "Better luck next time, Bud.."
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
       return "It's a draw!";
    }

    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock!";
    }

    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors!";
    }
    
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock!";
    }

    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper!";
    }

    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper!";
    }
    
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock Beats Scissors!";
    }

    else {
        return "I think you mistyped LoL!";
    }
  }

function getComputerChoice() {
    ranNum = Math.floor(Math.random() * 3);
    
    if (ranNum == 0) {
        return "Rock"
    }

    else if (ranNum == 1) {
        return "Paper"
    }

    else {
        return "Scissors"
    }
}

