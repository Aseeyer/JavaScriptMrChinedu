const prompt = require('prompt-sync')();

function passwordRetry() {
    const correctPassword = "python";
    let attempts = 0;

    while (attempts < 3) {
        let guess = prompt("Enter password: ");
        if (guess === correctPassword) {
            console.log("Success!");
            return;
        } else {
            attempts++;
            if (attempts < 3) {
                console.log("Try again!");
            }
        }
    }
    console.log("Locked out!");
}

passwordRetry();
