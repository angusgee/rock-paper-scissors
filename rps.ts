type gameChoice = "rock" | "paper" | "scissors";

function getComputerChoice(): gameChoice {
    const randInt = Math.random();
    if (randInt <= 0.33) {
        return "rock";
    } else if (randInt > 0.33 && randInt <= 0.66) {
        return "paper";
    } else return "scissors";
}

console.log("computer chooses: ", getComputerChoice());

function getHumanChoice(): gameChoice {
    const humanChoice: string | undefined = prompt(
        "Please enter rock, paper, or scissors (default is rock): "
    )?.toLowerCase();
    switch (humanChoice) {
        case "rock":
            return "rock";
        case "scissors":
            return "scissors";
        case "paper":
            return "paper";
        default:
            return "rock";
    }
}

console.log(getHumanChoice());
