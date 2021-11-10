// Generate random choice for the computer to play //

const computerPlay = ["Rock", "Paper", "Scissors"];
const random = Math.floor(Math.random() * computerPlay.length)
    // console.log(computerPlay[random]);

let playerSelection = "";
let computerSelection = computerPlay[random];
let playerScore = 0;
let computerScore = 0;

function game(choice) {
  let playerSelection = choice;
  while (computerScore < 5 && playerScore < 5) {
    playRound(playerSelection, computerSelection);
  }
  if (computerScore == 5) {
    document.getElementById("game-result").innerHTML = "You lost the game!";
  }
  else if (playerScore == 5) {
    document.getElementById("game-result").innerHTML = "You won the game!";
  }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        document.getElementById("round-result").innerHTML = "Draw!";
      }
      else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
          computerScore++;
          document.getElementById("round-result").innerHTML = "You lose!";
        }
        else {
          playerScore++;
          document.getElementById("round-result").innerHTML = "You win!";
        }
}

document.getElementById("rock").addEventListener("click", () => { game("rock") });
document.getElementById("paper").addEventListener("click", () => { game("paper") });
document.getElementById("scissors").addEventListener("click", () => { game("scissors") });

// console.log(game());
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
// console.log(computerScore, playerScore);