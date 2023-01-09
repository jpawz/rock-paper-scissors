const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
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
