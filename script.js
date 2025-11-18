const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

let resultsDiv = document.querySelector("#results");

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
  resultsDiv.textContent = `Your choice: ${humanChoice}. Computer's choice: ${computerChoice}.`;

  if (humanChoice === computerChoice) {
    resultsDiv.innerHTML += "<br>This round is a draw!";
    return;
  }

  if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    resultsDiv.innerHTML += "<br>You win the round!";
    humanScore++;
  } else {
    computerScore++;
    resultsDiv.innerHTML += "<br>Computer wins the round!";
  }

  resultsDiv.innerHTML += `<br>Your score: ${humanScore}. Computer's Score: ${computerScore}.`;
  checkForWinner();
}

function checkForWinner() {
  if (humanScore === 5) {
    resultsDiv.innerHTML += "<br>Game Over! You win!";
    humanScore = 0;
    computerScore = 0;
    return;
  }
  if (computerScore === 5) {
    resultsDiv.innerHTML += "<br>Game Over! Computer wins!";
    humanScore = 0;
    computerScore = 0;
    return;
  }
}

function playGame() {
  rockBtn.addEventListener('click', () => {
    playRound(rockBtn.value, getComputerChoice());
  })

  paperBtn.addEventListener('click', () => {
    playRound(paperBtn.value, getComputerChoice());
  })

  scissorsBtn.addEventListener('click', () => {
    playRound(scissorsBtn.value, getComputerChoice());
  })
}

playGame();

// TO-DO: Continue testing to see if the whole game works. I last added logic to determine 
// the winner via the checkForWinner() function. Also made sure it resets the 
// scores after a winner is declared. Might wanna add a PLAY AGAIN? button just for
// fun.