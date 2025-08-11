const prompt = require('prompt-sync')();

function greetingChooser() {
    let name = prompt("Enter your name: ");
    if (name === "Alex") {
        console.log("Hello, friend!");
    } else {
        console.log("Hi, stranger!");
    }
}



greetingChooser();

