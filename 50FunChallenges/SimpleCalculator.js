const prompt = require('prompt-sync')();

function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let operation = prompt("Enter '+' to add or '-' to subtract: ");

    if (operation === "+") {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operation === "-") {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else {
        console.log("Invalid operation!");
    }
}

simpleCalculator();
