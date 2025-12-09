function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {return "ROCK"}
    else if (number === 2) {return "PAPER"}
    else return "SCISSOR";
}
function getHumanChoice() {
    return prompt("Enter a choice: ").toUpperCase();
}

function playGame(){
    let humanScore = 0, computerScore = 0, count = 5;
	
	function playRound(humanChoice, computerChoice){
		if (humanChoice === "ROCK") {
			if (computerChoice === "SCISSOR") {
				humanScore++;
				console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
			} else if (computerChoice === "PAPER") {
				computerScore++;
				console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
			}else {console.log("It's a Draw!");}        
		}else if (humanChoice === "PAPER") {
			if (computerChoice === "ROCK") {
				humanScore++;
				console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
			} else if (computerChoice === "SCISSOR") {
				computerScore++;
				console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
			}else {console.log("It's a Draw!");}
		}else {
			if (computerChoice === "PAPER") {
				humanScore++;
				console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
			} else if (computerChoice === "ROCK") {
				computerScore++;
				console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
			}else {console.log("It's a Draw!");}
		}
	}

	while (count--) {
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();

		playRound(humanSelection, computerSelection);
	}
	console.log(`Your Score: ${humanScore}\nBot Score: ${computerScore}`)

	if (humanScore > computerScore) {
		console.log("Congratulations, you Win!🥳");
	}else if (humanScore < computerScore) {
		console.log("Oh no, you Lose!😭");
	}else {
		console.log("What luck, try again!✨");
	}
}