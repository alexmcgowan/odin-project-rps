//errors ai found: the use of else if as elseif, meaning it doesn't do anything. Using if (a =___) where it should be ==. Finally in the event of a tie in play round, it would default to else

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

const plrScoreTracker = document.getElementById("plr-score")
const CompScoreTracker = document.getElementById("comp-score")

const plrMove = document.getElementById("plrMove")
const compMove = document.getElementById("compMove")

let humScore = 0
let compScore = 0

let round = 0

const btns = [
    { element: buttonRock, value: "rock"},
    { element: buttonPaper, value: "paper"},
    { element: buttonScissors, value: "scissors"},
];

btns.forEach(({element,value}) => { //the => is called an arrow function expression, it basically means that for each button => (do) expression
    element.addEventListener("click", () => {
        handleClick(value)
    });
});

function updateScreen(plrChoice, compChoice) {
    plrScoreTracker.textContent = "Player: " + humScore
    CompScoreTracker.textContent = "Computer: " + compScore

    switch (plrChoice) {
        case "rock":
            plrMove.textContent = "👊";
            break;
        case "paper":
            plrMove.textContent = "✋";
            break;
        case "scissors":
            plrMove.textContent = "✌️";
            break;
        default:
            plrMove.textContent = "❔";
            break;
    }
    switch (compChoice) {
        case "rock":
            compMove.textContent = "👊";
            break;
        case "paper":
            compMove.textContent = "✋";
            break;
        case "scissors":
            compMove.textContent = "✌️";
            break;
        default:
            compMove.textContent = "❔";
            break;
    }
}

function getComputerChoice(choiceAmt) { // the choice amt is how many options you want to occur, so if 3, it will give 0 1 2
    let choice = Math.floor(Math.random() * choiceAmt); //math floor rounds to the nearest integer, so this makes it so you have a 1/3 chance to get a bunch of numbers, if you get like .1 you get 0, if you get .3 you get 1 if you get .8 you get 2
    switch(choice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            alert("Computer unable to choose")
            break;
    }
}

function getWinner(a, b) {
    if (a === b) return "tie";
    
    if (a === "rock") {
        switch(b) {
            case "paper":
                return "computer";
            case "scissors":
                return "human";
            default:
                break;
        }
    } else if (a === "paper") {
        switch(b) {
            case "scissors":
                return "computer";
            case "rock":
                return "human";
            default:
                break;
        }
    } else if (a === "scissors") {
        switch(b) {
            case "rock":
                return "computer";
            case "paper":
                return "human";
            default:
                break;
        }
    }
    
}

function playRound(choice) {
    let compChoice = getComputerChoice(3);
    let winner = getWinner(choice, compChoice);
    if (winner == "human") {
        humScore++
        updateScreen(choice, compChoice)
    } else if (winner == "computer") {
        compScore++
        updateScreen(choice, compChoice)
    } else if (winner == "tie") {
        updateScreen(choice, compChoice)
    } else {
        alert("Decision Error")
    }
}

function checkGameWinner() {
    if (humScore === compScore) {
        return "tie";
    } else if (humScore > compScore) {
        return "win";
    } else if (compScore > humScore) {
        return "loss";
    }
}

function reset() {
    plrScoreTracker.textContent = "Player:"
    CompScoreTracker.textContent = "Computer:"

    plrMove.textContent = "❔";
    compMove.textContent = "❔";

    humScore = 0
    compScore = 0

    round = 0
}

function handleClick(userChoice) {
    //checks if the game ended
    if (round >= 5) {
        let verdict = checkGameWinner()
        switch (verdict) {
            case "tie":
                alert("You tied!");
                break;
            case "win":
                alert("You won!");
                break;
            case "loss":
                alert("You lost.");
                break;
            default:
        }
        reset();
        return;
    }
    round++
    playRound(userChoice)
}