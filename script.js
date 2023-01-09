const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getPlayerChoice() {
  let answer;
  do {
    answer = prompt("Type Rock, Paper or Scissors");
  } while (choices.lastIndexOf(capitalize(answer)) === -1);

  return capitalize(answer);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Match!";
  }
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else {
      playerScore++;
      return "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      playerScore++;
      return "You Win! Paper beats Rock";
    } else {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    }
  }
  if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
      playerScore++;
      return "You Win! Scissors beats Paper";
    } else {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    }
  }
}

function game(rounds = 1) {
  for (let i = 0; i < rounds; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice, computerChoice);

    console.log(result);
  }
}

const result = document.getElementById("result");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");

function setScores() {
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;
  if(playerScore === 5) {
    result.innerText = "You Win the Game!";
    playerScore = 0;
    computerScore = 0;
  }
  if(computerScore === 5) {
    result.innerText = "Computer Win the Game!";
    playerScore = 0;
    computerScore = 0;
  }
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
  result.innerText = playRound("Rock", getComputerChoice());
  setScores();
});
const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
  result.innerText = playRound("Paper", getComputerChoice());
  setScores();
});
const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () {
  result.innerText = playRound("Scissors", getComputerChoice());
  setScores();
});
