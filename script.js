let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

const computerPlay = ["rock", "paper", "scissors"];

function playRound(playerSelection) {
  computerSelection = computerPlay[Math.floor(Math.random() * computerPlay.length)];
    if (computerSelection == playerSelection) {
        document.getElementById("round-result").innerHTML = "Draw!";
        document.getElementById("game-result").innerHTML = "";
      }
      else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
          computerScore++;
          document.getElementById("round-result").innerHTML = "You lose!";
          document.getElementById("game-result").innerHTML = "";
        }
        else {
          playerScore++;
          document.getElementById("round-result").innerHTML = "You win!";
          document.getElementById("game-result").innerHTML = "";
        }
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playerScore);
        console.log(computerScore);
        showScore();
        game();
}

function game() {
  if (computerScore == 5) {
    document.getElementById("game-result").innerHTML = "You lost the game!";
    playerScore = 0;
    computerScore = 0;
  }
  else if (playerScore == 5) {
    document.getElementById("game-result").innerHTML = "You won the game!";
    playerScore = 0;
    computerScore = 0;
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("round-result").innerHTML = "";
  document.getElementById("game-result").innerHTML = "";
  showScore();
}

function showScore() {
  document.getElementById("playerscore").innerHTML = playerScore;
  document.getElementById("computerscore").innerHTML = computerScore;
}

showScore();
document.getElementById("rock").addEventListener("click", () => { playRound("rock") });
document.getElementById("paper").addEventListener("click", () => { playRound("paper") });
document.getElementById("scissors").addEventListener("click", () => { playRound("scissors") });
document.getElementById("resetbtn").addEventListener("click", () => { reset() });