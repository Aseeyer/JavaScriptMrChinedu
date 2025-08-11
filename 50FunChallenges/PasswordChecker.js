const prompt = require('prompt-sync')();


function passwordChecker(){
    let password = "secret123";
    let userChoice = prompt("Guess the Password: ");
    if (userChoice === password){
        console.log("Access Granted! Welcome!")
    }else{
        console.log("Access Denied!")
        }
    
}

passwordChecker()