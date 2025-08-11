const prompt = require('prompt-sync')();

function guessWithHints() {
    const answer = 25;
    while (true) {
        let guess = parseInt(prompt("Guess the number: "));
        if (guess > answer) {
            console.log("Too high!");
        } else if (guess < answer) {
            console.log("Too low!");
        } else {
            console.log("Correct!");
            break;
        }
    }
}

guessWithHints();
