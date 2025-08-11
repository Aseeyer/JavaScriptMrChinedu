const prompt = require('prompt-sync')();

function multiplesInRange() {
    let startNumber = parseInt(prompt("Enter the start number: "));
    let endNumber = parseInt(prompt("Enter the end number: "));

    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
        if (currentNumber % 4 === 0) {
            console.log(currentNumber);
        }
    }
}

multiplesInRange();
