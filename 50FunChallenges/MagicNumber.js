const prompt = require('prompt-sync')();


function magicNumber(){
    let userInput = parseInt(prompt("Input a number: "))
    if(userInput === 42){
        console.log("You found the magic number!")
    }else{console.log("Keep looking!")}

}



magicNumber()