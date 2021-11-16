let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

const computerPlay = ["Rock", "Paper", "Scissors"];


function playRound(playerSelection) {
  computerSelection = computerPlay[Math.floor(Math.random() * computerPlay.length)];
    if (computerSelection == playerSelection) {
        document.getElementById("round-result").innerHTML = "Draw!";
        document.getElementById("game-result").innerHTML = "";
      }
      else if (
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock")
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
        document.getElementById("playerchoice").innerHTML = playerSelection;
        document.getElementById("computerchoice").innerHTML = computerSelection;
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

function showScore() {
  document.getElementById("playerscore").innerHTML = playerScore;
  document.getElementById("computerscore").innerHTML = computerScore;
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("round-result").innerHTML = "";
  document.getElementById("game-result").innerHTML = "";
  document.getElementById("playerchoice").innerHTML = "";
  document.getElementById("computerchoice").innerHTML = "";
  showScore();
}

showScore();
document.getElementById("rock").addEventListener("click", () => { playRound("Rock") });
document.getElementById("paper").addEventListener("click", () => { playRound("Paper") });
document.getElementById("scissors").addEventListener("click", () => { playRound("Scissors") });
document.getElementById("resetbtn").addEventListener("click", () => { reset() });