const prompt = require('prompt-sync')();


function printName(){
    let userName = prompt("What is your name? ")
    for(star = 0; star < 3; star++){
        userName[star]
        console.log(userName + "!")
        
    }


}

printName()