type gameChoice = "rock" | "paper" | "scissors";
let humanScore = 0;
let computerScore = 0;
let currentUserChoice: gameChoice = "rock";

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

btnRock?.addEventListener("click", () => {
    setUserChoice("rock");
    console.log(">> user choice set to: Rock");
    playRound(getComputerChoice(), currentUserChoice);
});

btnPaper?.addEventListener("click", () => {
    setUserChoice("paper");
    console.log(">> user choice set to: Paper");
    playRound(getComputerChoice(), currentUserChoice);
});

btnScissors?.addEventListener("click", () => {
    setUserChoice("scissors");
    console.log(">> user choice set to: Scissors");
    playRound(getComputerChoice(), currentUserChoice);
});

function getComputerChoice(): gameChoice {
    const randInt = Math.random();
    if (randInt <= 0.33) {
        console.log("computer chooses rock");
        return "rock";
    } else if (randInt > 0.33 && randInt <= 0.66) {
        console.log("computer chooses paper");
        return "paper";
    } else {
        console.log("computer chooses scissors");
        return "scissors";
    }
}

function setUserChoice(userSelection: gameChoice): void {
    currentUserChoice = userSelection;
}

function playRound(
    currentUserChoice: gameChoice,
    computerChoice: gameChoice
): void {
    if (currentUserChoice === computerChoice) {
        console.log("Round is a tie! Both player entered ", currentUserChoice);
    } else if (currentUserChoice === "paper" && computerChoice === "rock") {
        console.log("You win this round! Paper wraps rock");
        humanScore += 1;
    } else if (currentUserChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer wins this round! Scissors cuts paper");
        computerScore += 1;
    } else if (currentUserChoice === "rock" && computerChoice === "scissors") {
        console.log("You win this round! Rock smashes scissors");
        humanScore += 1;
    } else if (currentUserChoice === "rock" && computerChoice === "paper") {
        console.log("Computer wins this round! Paper wraps rock");
        computerScore += 1;
    } else if (currentUserChoice === "scissors" && computerChoice === "paper") {
        console.log("You win this round! Scissors cuts paper");
        humanScore += 1;
    } else if (currentUserChoice === "scissors" && computerChoice === "rock") {
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
