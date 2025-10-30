let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomVal = Math.random();

  if (randomVal < 0.3) {
    return "rock";
  } else if (randomVal < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userInput = prompt('Rock, paper, or scissors?').toLowerCase();

  return userInput;
}

function playRound(humanChoice, computerChoice) {
  console.log(`human's choice: ${humanChoice}. Computer's choice: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("This round is a draw!");
    return;
  }

  if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    console.log("You win the round!")
    humanScore++;
  } else {
    computerScore++;
    console.log("Computer wins the round!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore === computerScore) {
    console.log("It's a draw!");
    return;
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("You lose! Computer wins the game!");
  }
}

playGame();