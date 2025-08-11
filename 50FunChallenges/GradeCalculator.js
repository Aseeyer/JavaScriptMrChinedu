const prompt = require('prompt-sync')();

function gradeCalculator() {
    let userInput = parseInt(prompt("Give me your test score (0-100): "));
    if (userInput >= 90) {
        console.log("A!");
    } else if (userInput >= 80 && userInput <= 89) {
        console.log("B!");
    } else if (userInput >= 70 && userInput <= 79) {
        console.log("C!");
    } else if (userInput < 70) {
        console.log("F!");
    }
}

gradeCalculator();
