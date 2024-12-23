type gameChoice = "rock" | "paper" | "scissors";
let humanScore = 0;
let computerScore = 0;
let currentUserChoice: gameChoice = "rock";

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

btnRock?.addEventListener("click", () => {
    playGame("rock");
});

btnPaper?.addEventListener("click", () => {
    playGame("paper");
});

btnScissors?.addEventListener("click", () => {
    playGame("scissors");
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

function playGame(userChoice: gameChoice): void {
    currentUserChoice = userChoice;
    console.log(`>> user choice set to: ${userChoice}`);
    let computerChoice = getComputerChoice();
    playRound(currentUserChoice, computerChoice);
    console.log(
        `current scores:\nYou: ${humanScore}\nComputer: ${computerScore}`
    );
    if (humanScore > 4) {
        console.log("Game over. You win!! 🎉🎉");
    } else if (computerScore > 4) {
        console.log("Game over. Computer wins - better luck next time 😭");
    }
}
