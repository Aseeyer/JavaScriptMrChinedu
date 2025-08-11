const prompt = require('prompt-sync')();

function petChooser() {
    let pet = prompt("Enter your favorite pet: ");
    if (pet === "dog") {
        console.log("Woof! Dogs are awesome!");
    } else {
        console.log("Cool choice, but I love dogs!");
    }
}


petChooser();
