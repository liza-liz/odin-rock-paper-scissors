function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    console.log(number);
    if (number === 1) {return "ROCK"}
    else if (number === 2) {return "PAPER"}
    else return "SCISSOR";
}
function getHumanChoice() {
    return prompt("Enter a choice: ");
}
function playRound(humanChoice, computerChoice){

}
let humanScore = 0, computerScore = 0;
