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
            result = "You Tied! Computer chose rock";
        } else if (computerSelection === "paper") {
            result = "You Lose! Paper beats rock";
        } else {
            result = "You Win! Rock beats scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You Win! Paper beats rock";
        } else if (computerSelection === "paper") {
            result = "You Tied! Computer chose paper";
        } else {
            result = "You Lose! Scissors beats paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You Lose! Rock beats scissors";
        } else if (computerSelection === "paper") {
            result = "You Win! Scissors beats paper";
        } else {
            result = "You Tied! Computer chose scissors";
        }
    } else {
        result = "Invalid input";
    }
    console.log(result);
}

compare(prompt("Enter rock, paper or scissors").toLowerCase(), getComputerChoice());