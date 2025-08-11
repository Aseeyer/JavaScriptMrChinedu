const prompt = require('prompt-sync')();


function positiveNegative(){
    let userInput = parseInt(prompt("Input a number: "));
    if (userInput > 0){
        console.log("Positive!");
    }else if(userInput <= 0){
        console.log("Negative!");
    }
}

positiveNegative()