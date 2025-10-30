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

// console.log(getComputerChoice());

function getHumanChoice() {
  const userInput = prompt('Rock, paper, or scissors?').toLowerCase();

  return userInput;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`human's choice: ${humanChoice}. Computer's choice: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
    return;
  }

  if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("You lose!");
    computerScore++;
  }
}

playRound(getHumanChoice(), getComputerChoice());


