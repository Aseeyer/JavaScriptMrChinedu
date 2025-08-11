const prompt = require('prompt-sync')();

function nestedColorChooser() {
    let chosenColor = prompt("Enter a color: ").toLowerCase();

    if (chosenColor === "red") {
        for (let repeatCount = 1; repeatCount <= 3; repeatCount++) {
            console.log("Red is awesome!");
        }
    } else {
        console.log("I like red better!");
    }
}

nestedColorChooser();
