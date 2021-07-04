// Generate random choice for the computer to play //

const computerPlay = ["Rock", "Paper", "Scissors"];
const random = Math.floor(Math.random() * computerPlay.length)
    // console.log(computerPlay[random]);

let playerSelection = prompt("Choose!", "");
let computerSelection = computerPlay[random];

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
        return "Draw!";
      } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) { return "You lose!";
        }
        else {
            return "You win!";
        }
}


console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);