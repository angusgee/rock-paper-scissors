"use strict";
let humanScore = 0;
let computerScore = 0;
let currentUserChoice = "rock";
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
btnRock === null || btnRock === void 0 ? void 0 : btnRock.addEventListener("click", () => {
    setUserChoice("rock");
    console.log(">> user choice set to: rock");
    playRound(getComputerChoice(), currentUserChoice);
    console.log(`current scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);
});
btnPaper === null || btnPaper === void 0 ? void 0 : btnPaper.addEventListener("click", () => {
    setUserChoice("paper");
    console.log(">> user choice set to: paper");
    playRound(getComputerChoice(), currentUserChoice);
    console.log(`current scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);
});
btnScissors === null || btnScissors === void 0 ? void 0 : btnScissors.addEventListener("click", () => {
    setUserChoice("scissors");
    console.log(">> user choice set to: scissors");
    playRound(getComputerChoice(), currentUserChoice);
    console.log(`current scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);
});
function getComputerChoice() {
    const randInt = Math.random();
    if (randInt <= 0.33) {
        console.log("computer chooses rock");
        return "rock";
    }
    else if (randInt > 0.33 && randInt <= 0.66) {
        console.log("computer chooses paper");
        return "paper";
    }
    else {
        console.log("computer chooses scissors");
        return "scissors";
    }
}
function setUserChoice(userSelection) {
    currentUserChoice = userSelection;
}
function playRound(currentUserChoice, computerChoice) {
    if (currentUserChoice === computerChoice) {
        console.log("Round is a tie! Both player entered ", currentUserChoice);
    }
    else if (currentUserChoice === "paper" && computerChoice === "rock") {
        console.log("You win this round! Paper wraps rock");
        humanScore += 1;
    }
    else if (currentUserChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer wins this round! Scissors cuts paper");
        computerScore += 1;
    }
    else if (currentUserChoice === "rock" && computerChoice === "scissors") {
        console.log("You win this round! Rock smashes scissors");
        humanScore += 1;
    }
    else if (currentUserChoice === "rock" && computerChoice === "paper") {
        console.log("Computer wins this round! Paper wraps rock");
        computerScore += 1;
    }
    else if (currentUserChoice === "scissors" && computerChoice === "paper") {
        console.log("You win this round! Scissors cuts paper");
        humanScore += 1;
    }
    else if (currentUserChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer wins this round! Rock smashes scissors");
        computerScore += 1;
    }
}
// function getHumanChoice(): gameChoice {
//     const humanChoice: string | undefined = prompt(
//         "Please enter rock, paper, or scissors (default is rock): "
//     )?.toLowerCase();
//     switch (humanChoice) {
//         case "rock":
//             console.log("you chose rock");
//             return "rock";
//         case "scissors":
//             console.log("you chose scissors");
//             return "scissors";
//         case "paper":
//             console.log("you chose paper");
//             return "paper";
//         default:
//             console.log("no correct choice detected >> defaulting to rock");
//             return "rock";
//     }
// }
// function playGame(): void {
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log(humanScore);
//         console.log(computerScore);
//     }
//     if (humanScore > computerScore) {
//         console.log("You win!! 🎉🎉");
//     } else if (computerScore > humanScore) {
//         console.log("Computer wins - better luck next time 😭");
//     } else console.log("Game is a tie! ❌");
// }
// playGame();
