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
console.log(getComputerChoice());
