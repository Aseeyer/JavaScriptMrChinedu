const prompt = require('prompt-sync')();


function ageRestriction(){
    let minimumAge = 10;
    let userInput = prompt("How old are you? ");
    if(userInput >= 10){
        console.log("Welcome to the show!")    
    }else{ console.log("Sorry, you're too young");}
    
    
}

ageRestriction()