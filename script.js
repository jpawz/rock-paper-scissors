function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getPlayerChoice() {
  let answer;
  do {
    answer = prompt("Type Rock, Paper or Scissors");
  } while (
    answer.toLowerCase() != "rock" &&
    answer.toLowerCase() != "paper" &&
    answer.toLowerCase() != "scissors"
  );

  return answer[0].toUpperCase() + answer.substring(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Match!";
  }
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Rock beats Scissors";
    }
  }
  if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
      return "You Win! Scissors beats Paper";
    } else {
      return "You Lose! Rock beats Scissors";
    }
  }
}
