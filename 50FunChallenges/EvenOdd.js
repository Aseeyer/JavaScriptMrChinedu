const prompt = require('prompt-sync')();

function isEvenOdd(int){
    let number = parseInt(prompt("Enter a number: "));
    if (number % 2 == 0){
        console.log("Even!");
    } else if(number % 2 !== 0){
        console.log("Odd!");
    }
 
}

isEvenOdd();