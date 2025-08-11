const prompt = require("prompt-sync")();

function nestedColorGame() {
    while (true) {
        let favoriteColor = "blue";
        for (let round = 0; round < 3; round++) {
            let guess = prompt("Guess the color: ").toLowerCase();
            if (guess === favoriteColor) {
                console.log("Correct!");
                break;
            } else if (guess === "green") {
                console.log("Close!");
            } else {
                console.log("Wrong!");
            }
        }
        let choice = prompt("Play again? (yes/no): ").toLowerCase();
        if (choice !== "yes") break;
    }
}

nestedColorGame();
