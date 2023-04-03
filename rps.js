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