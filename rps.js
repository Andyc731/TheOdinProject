function getComputerChoice() {
    let hand = " ";
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1){
        hand = "rock";
    } else if (random === 2) {
        hand = "paper";
    } else {
        hand = "scissors";
    }
    return hand;
}

console.log(getComputerChoice());

function compare(playerSelection, computerSelection){
    let result = " ";

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "You Tied!";
        } else if (computerSelection === "paper") {
            result = "You Lose!";
        } else {
            result = "You Win!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You Win!";
        } else if (computerSelection === "paper") {
            result = "You Tied!";
        } else {
            result = "You Lose!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You Lose!";
        } else if (computerSelection === "paper") {
            result = "You Win!";
        } else {
            result = "You Tied!";
        }
    } else {
        result = "Invalid input";
    }
    console.log(result);
}

compare(prompt("Enter rock, paper or scissors"), getComputerChoice());