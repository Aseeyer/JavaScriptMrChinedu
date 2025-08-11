function sumOfEvens() {
    let total = 0;
    for (let num = 1; num <= 20; num++) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    console.log("Sum of evens: " + total);
}

sumOfEvens();
