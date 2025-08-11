const prompt = require("prompt-sync")();

function simpleQuiz() {
    const correctAnswer = "Paris";
    let attemptsLeft = 3;
    while (attemptsLeft > 0) {
        let userAnswer = prompt("What's the capital of France? ");
        if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            console.log("Correct!");
            return;
        } else {
            attemptsLeft--;
            if (attemptsLeft > 0) {
                console.log("Try again!");
            } else {
                console.log("No more tries! The answer was " + correctAnswer + ".");
            }
        }
    }
}

simpleQuiz();
