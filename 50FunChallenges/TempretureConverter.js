const prompt = require("prompt-sync")();

function temperatureConverter() {
    while (true) {
        let celsius = parseFloat(prompt("Enter a temperature in Celsius: "));
        if (celsius < -273) {
            console.log("Impossible!");
        } else {
            for (let step = 0; step < 5; step++) {
                let currentCelsius = celsius + step;
                let fahrenheit = (currentCelsius * 9 / 5) + 32;
                console.log(currentCelsius + "C = " + fahrenheit + "F");
            }
        }
        let choice = prompt("Convert again? (yes/no): ").toLowerCase();
        if (choice !== "yes") break;
    }
}

temperatureConverter();
