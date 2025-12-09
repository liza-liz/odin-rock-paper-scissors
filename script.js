function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}
function getHumanChoice() {
    return +prompt("Enter a number: ");
}