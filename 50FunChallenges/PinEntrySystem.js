const prompt = require("prompt-sync")();

function pinEntrySystem() {
    const pin = "1234";
    let tries = 0;

    while (tries < 3) {
        let input = prompt("Enter PIN: ");
        if (input === pin) {
            console.log("Access granted!");
            return;
        } else {
            console.log("Try again!");
        }
        tries++;
    }
    console.log("Locked!");
}

pinEntrySystem();
