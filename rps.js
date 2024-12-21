"use strict";
function getComputerChoice() {
    const randInt = Math.random();
    if (randInt <= 0.33) {
        return "rock";
    }
    else if (randInt > 0.33 && randInt <= 0.66) {
        return "paper";
    }
    else
        return "scissors";
}
console.log("computer chooses: ", getComputerChoice());
function getHumanChoice() {
    var _a;
    const humanChoice = (_a = prompt("Please enter rock, paper, or scissors (default is rock): ")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
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
