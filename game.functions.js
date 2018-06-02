let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;

const content = document.querySelector('#content');
const roundResults = document.createElement('h4');
roundResults.textContent = "Player Score: " + playerScore + "  Computer Score: " + computerScore;
content.appendChild(roundResults);

const roundHands = document.createElement('h1'); 
roundHands.textContent = "Select your hand. First to 5 points is the winner!"
content.appendChild(roundHands);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playerSelection = button.id;
		computerSelection = computerPlay();
		roundHands.textContent = game();
		content.appendChild(roundHands);
		roundResults.textContent = "Player Score: " + playerScore + "  Computer Score: " + computerScore;
		content.appendChild(roundResults);
		if (playerScore == 0 && computerScore == 0) {
			roundHands.textContent = "Select your hand. First to 5 points is the winner!"
			content.appendChild(roundHands);
		}
	});
});

function game() {
	const roundResult = playRound(playerSelection, computerSelection);
	if (playerScore == 5) {
		alert("You win!");
		playerScore = 0;
		computerScore = 0;
	} else if (computerScore == 5) {
		alert("You lose.");
		playerScore = 0;
		computerScore = 0;
	}
	return roundResult;
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
