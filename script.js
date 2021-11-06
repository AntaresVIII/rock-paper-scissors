// Generate random choice for the computer to play //

const computerPlay = ["Rock", "Paper", "Scissors"];
const random = Math.floor(Math.random() * computerPlay.length)
    // console.log(computerPlay[random]);

let playerSelection = "";
let computerSelection = computerPlay[random];
let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", function() { playerSelection = "rock" });
document.getElementById("paper").addEventListener("click", function() { playerSelection = "paper" });
document.getElementById("scissors").addEventListener("click", function() { playerSelection = "scissors" });

function game() {
  while (computerScore < 5 && playerScore < 5) {
    playRound(playerSelection, computerSelection);
  }
  if (computerScore == 5) {
    return "You lose u fucking useless piece of trash!!!!!!!!!";
  }
  else if (playerScore == 5) {
    return "You won and please kill urself";
  }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Draw!";
      }
      else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
          computerScore++;
          return "You lose!";
        }
        else {
          playerScore++;
          return "You win!";
        }
}

// console.log(game());
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
// console.log(computerScore, playerScore);