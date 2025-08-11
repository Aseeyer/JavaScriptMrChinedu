function numberPattern() {
    for (let line = 1; line <= 3; line++) {
        let pattern = "";
        for (let num = 1; num <= line; num++) {
            pattern += num + " ";
        }
        console.log(pattern.trim());
    }
}

numberPattern();
