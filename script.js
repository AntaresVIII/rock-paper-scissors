const computerPlay = ["Rock", "Paper", "Scissors"];
let playerSelection;
let playerScore = 0;
let computerSelection;
let computerScore = 0;
let random;
let gameRounds = 1;
	
function game() {
	while (gameRounds <= 5)
	{
		playerSelection = prompt("Choose!", "");
		random = Math.floor(Math.random() * computerPlay.length);
		computerSelection = computerPlay[random];
		console.log(playRound(playerSelection, computerSelection));
		console.log("You chose:", playerSelection, "& Computer chose:", computerSelection);
		console.log("Your Score:", playerScore, "Computer Score:", computerScore);
		console.log("Round:", gameRounds);
		gameRounds++;
	}

	if (computerScore > playerScore) {
		console.log("YOU LOOSE!");
	}
	else if (computerScore == playerScore) 
	{
		console.log("IT'S A DRAW!");
	}
	else
	{
		console.log("YOU WIN!");
	}
	return "Game over.";
}
		
function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	if (computerSelection == playerSelection) 
		{
			return "Draw!";
		}
	else if (
		(computerSelection == "rock" && playerSelection == "scissors") ||
		(computerSelection == "scissors" && playerSelection == "paper") ||
		(computerSelection == "paper" && playerSelection == "rock")
		) 
		{
			computerScore++;
			return "Computer +1";
		}
	else 
		{
			playerScore++;
			return "You +1";
		}
	}

console.log(game());