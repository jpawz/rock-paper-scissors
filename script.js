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
