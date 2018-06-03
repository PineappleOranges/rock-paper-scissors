let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;
// Manipulating DOM for scorekeeping
const score = document.querySelector('#score');

const currentPlayerScore = document.createElement('h2');
currentPlayerScore.textContent = `Player: ${playerScore}`;
score.appendChild(currentPlayerScore);

const currentComputerScore = document.createElement('h2');
currentComputerScore.textContent = `Computer: ${computerScore}`;
score.appendChild(currentComputerScore);

// Manipulating DOM for round results
const roundResults = document.querySelector('#roundResults');
const currentRoundResults = document.createElement('h3');
currentRoundResults.textContent = "Select a hand to start. First to 5 is the winner."
roundResults.appendChild(currentRoundResults);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		currentRoundResults.textContent = `${playRound(button.id, computerPlay())}`;
		roundResults.appendChild(currentRoundResults);

		currentPlayerScore.textContent = `Player: ${playerScore}`;
		score.appendChild(currentPlayerScore);
		currentComputerScore.textContent = `Computer: ${computerScore}`;
		score.appendChild(currentComputerScore);

		game();
	});
});

function game() {
	if (playerScore == 5) {
		alert("You beat the computer!");
		playerScore = 0;
		computerScore = 0;
	} else if (computerScore == 5) {
		alert("You lost against a computer.");
		playerScore = 0;
		computerScore = 0;
	}
}

function playRound(playerSelection, computerSelection) {
	let roundResult = null;

	if (playerSelection == computerSelection) {
		roundResult = "Draw!";
	}	else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
		playerScore ++;
		roundResult = "You Win! " + playerSelection + " beats " + computerSelection + ".";
	}	else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
		playerScore ++;
		roundResult = "You Win! " + playerSelection + " beats " + computerSelection + ".";
	}	else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
		playerScore ++;
		roundResult = "You Win! " + playerSelection + " beats " + computerSelection + ".";
	}	else {
		computerScore ++;
		roundResult = "You Lose! " + computerSelection + " beats " + playerSelection + "."; 
	}
	return roundResult;
}

function computerPlay() {
	let computerHand = getRandomInt(3);
	switch (computerHand) {
		case 0:
			computerHand = "ROCK";
			break;
		case 1:
			computerHand = "PAPER";
			break;
		case 2:
			computerHand = "SCISSORS";
			break;
	}
	return computerHand;
}

// Integer version of Math.random(): Copied from Mozilla MDN
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
