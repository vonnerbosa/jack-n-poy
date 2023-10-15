

function game() {
    let score = 0;
    let playerSelection = prompt("Rock? Paper? or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result.includes("Win")){
        ++score
    }

    console.log(result+" "+"player score is "+score)
////////////////////////////////////////////////////////////////////////
    playerSelection = prompt("Rock? Paper? or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    if (result.includes("Win")){
        ++score
    }

    console.log(result+" "+"player score is "+score)
////////////////////////////////////////////////////////////////////////
    playerSelection = prompt("Rock? Paper? or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    if (result.includes("Win")){
        ++score
    }

    console.log(result+" "+"player score is "+score)
////////////////////////////////////////////////////////////////////////
    playerSelection = prompt("Rock? Paper? or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    if (result.includes("Win")){
        ++score
    }

    console.log(result+" "+"player score is "+score)
////////////////////////////////////////////////////////////////////////
    playerSelection = prompt("Rock? Paper? or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    if (result.includes("Win")){
        ++score
    }

    console.log(result+" "+"player score is "+score)
////////////////////////////////////////////////////////////////////////
    console.log("\nAfter five rounds, the player scored a total of "+score+" points!"+"\n\nThank you for playing!")
}


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
        return "I think you mistyped LoL!";
    }
  }

  game()

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

