function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {return "ROCK"}
    else if (number === 2) {return "PAPER"}
    else return "SCISSOR";
}
function getHumanChoice(event) {
    return event.target.value;
}

function playGame(){
    let humanScore = 0, computerScore = 0;

	function playRound(humanChoice, computerChoice){
		if (humanChoice === "ROCK") {
			if (computerChoice === "SCISSOR") {
				humanScore++;
				message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
			} else if (computerChoice === "PAPER") {
				computerScore++;
				message.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
			}else {message.textContent = "It's a Draw!";}        
		}else if (humanChoice === "PAPER") {
			if (computerChoice === "ROCK") {
				humanScore++;
				message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
			} else if (computerChoice === "SCISSOR") {
				computerScore++;
				message.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
			}else {message.textContent = "It's a Draw!";}
		}else {
			if (computerChoice === "PAPER") {
				humanScore++;
				message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
			} else if (computerChoice === "ROCK") {
				computerScore++;
				message.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
			}else {message.textContent = "It's a Draw!";}
		}
	}
	
	const buttons = document.querySelectorAll('button');
	const playerP = document.querySelector("#player");
	const computerP = document.querySelector("#computer");
	const message = document.querySelector("#message");

	// Loop through each button and add a click event listener
	buttons.forEach(button => {
		button.addEventListener('click', event => {
			event.preventDefault();
			// Get the value of the clicked button
			let playerSelection = getHumanChoice(event);
			let computerSelection = getComputerChoice();

			playRound(playerSelection, computerSelection);

			playerP.textContent = `Your Score: ${humanScore}`;
			computerP.textContent = `Bot Score: ${computerScore}`;

			if (humanScore == 5 || computerScore == 5){
				if (humanScore > computerScore) {
					message.textContent = "Congratulations, you Win!🥳";
				}else if (humanScore < computerScore) {
					message.textContent = "Oh no, you Lose!😭";
				}else {
					message.textContent = "What luck, try again!✨";}
			}
		});
	});
}

playGame();