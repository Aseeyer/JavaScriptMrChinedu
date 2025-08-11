const prompt = require('prompt-sync')();

function factorCounter() {
    let number = parseInt(prompt("Enter a number: "));
    let factorCount = 0;

    for (let possibleFactor = 1; possibleFactor <= number; possibleFactor++) {
        if (number % possibleFactor === 0) {
            factorCount++;
        }
    }

    console.log("Factors: " + factorCount);
}

factorCounter();
