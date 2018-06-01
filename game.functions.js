let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;

const content = document.querySelector('#content');
const roundResults = document.createElement('h4');
roundResults.textContent = "Player Score: " + playerScore + "  Computer Score: " + computerScore;
content.appendChild(roundResults);


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playerSelection = button.id;
		computerSelection = computerPlay();
		game();
		roundResults.textContent = "Player Score: " + playerScore + "  Computer Score: " + computerScore;
		content.appendChild(roundResults);
	});
});

function game() {
	playRound(playerSelection, computerSelection);
	if (playerScore == 5) {
		alert("You win!");
		playerScore = 0;
		computerScore = 0;
	} else if (computerScore == 5) {
		alert("You lose.");
		playerScore = 0;
		computerScore = 0;
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		console.log("Draw!");
	}	else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
		playerScore ++;
		console.log("You Win!");
	}	else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
		playerScore ++;
		console.log("You Win!");
	}	else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
		playerScore ++;
		console.log("You Win!");
	}	else {
		computerScore ++;
		console.log("You Lose! " + computerSelection + " beats " + playerSelection + "."); 
	}
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
