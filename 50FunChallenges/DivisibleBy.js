function divisibleBy3And5() {
    for (let num = 1; num <= 20; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log(num);
        }
    }
}

divisibleBy3And5();
