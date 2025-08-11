const prompt = require('prompt-sync')();


function tempretureCheck(){
    let userInput = parseInt(prompt("Input a tempreture: "));
    if(userInput > 30){
        console.log("Hot!")
    }else if(userInput >= 15 && userInput <= 30){
        console.log("Nice!");
    }else if(userInput < 15){
        console.log("Cold!")}
    
}

tempretureCheck()