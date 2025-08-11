const prompt = require('prompt-sync')();


function favoriteNumberGame() {
    const favoriteNumber = 7;
    let guess = Number(prompt("Guess my favorite number: "));
    if (guess === favoriteNumber) {
        console.log("That's my favorite number!");
    } else {
        console.log("Nice try, guess again!");
    }
}

favoriteNumberGame();