const prompt = require('prompt-sync')();


function numberGuess(){
let userInput = parseInt(prompt("Enter a number: "))
console.log(typeof userInput)
let secret = 8
while (userInput != secret){
   userInput = parseInt(prompt("Enter a number: "))

}
if (userInput == secret)
    console.log("Correct")
}
numberGuess()