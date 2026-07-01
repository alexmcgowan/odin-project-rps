function getComputerChoice(choiceAmt) { // the choice amt is how many options you want to occur, so if 3, it will give 0 1 2
    let choice = Math.floor(Math.random() * choiceAmt); //math floor rounds to the nearest integer, so this makes it so you have a 1/3 chance to get a bunch of numbers, if you get like .1 you get 0, if you get .3 you get 1 if you get .8 you get 3
    return choice
}

function getWinner(a, b) {
    if (a === b) return "tie";
    let winner = "unknown";

    let deciding = ((a - b + 3) / 3);
    (deciding > 1) ? deciding = (deciding - 1) : deciding;

    (deciding > .4) ? winner = "computer" : winner = "human";
    return(winner)
}

function getHumanChoice(round) {
    let num = (round + 1);
    let humChoice = prompt("Round: " + num +" Make a choice, rock, paper, or scissors", "rock");
    if (humChoice.toLowerCase() === "rock") {
        humChoice = 0;
    } else if (humChoice.toLowerCase() === "paper") {
        humChoice = 1;
    } else if (humChoice.toLowerCase() === "scissors") {
        humChoice = 2;
    } else {
        prompt("Code error");
    }

    let compChoice = getComputerChoice(3);
    let winner = getWinner(humChoice, compChoice);
    if (winner === "human") {
        prompt("You Won! :D");
        return 1;
    } else if (winner === "computer") {
        prompt("You lost. :(");
        return -1;
    } else {
        prompt("Tie :|");
        return 0;
    }
}

function playRound(round) {
    let difference = getHumanChoice(round);
    return difference;
}

function playGame() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let change = playRound(i);
        score = (score + change);
    }
    if (score > 1) {
        prompt("You won the game!");
    } else if (score < 1){
        prompt("You lost the game..");
    } else {
        prompt("error"); 
    }
}

playGame();