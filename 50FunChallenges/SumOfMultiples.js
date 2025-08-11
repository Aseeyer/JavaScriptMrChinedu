function sumOfMultiples() {
    let total = 0;
    for (let number = 1; number <= 50; number++) {
        if (number % 3 === 0 || number % 5 === 0) {
            total += number;
        }
    }
    console.log(total);
}

sumOfMultiples();
