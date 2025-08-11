const prompt = require('prompt-sync')();

function guessAnimal(){
    let myAnimal = "dog";
    let userInput = prompt("Guess the animal...")
    if(userInput === myAnimal){
        console.log("Correct! it's a dog")
    }else {console.log("Nope, it's a dog!")}

}

guessAnimal()