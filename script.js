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
    string[0].toUpperCase() + string.substring(1).toLowerCase();
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

function game(rounds = 1) {
  for (let i = 0; i < rounds; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice, computerChoice);

    console.log(result);
  }
}
