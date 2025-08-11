const prompt = require("prompt-sync")();

while (true) {
    let number = parseInt(prompt("Enter a number: "));
    let isPrime = true;

    for (let divider = 2; divider < number; divider++) {
        if (number % divider === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && number > 1) {
        console.log("Prime!");
    } else {
        console.log("Not prime!");
    }

    let choice = prompt("Check another? (y/n): ").toLowerCase();
    if (choice !== "y") break;
}
