function numberPyramid() {
    for (let line = 1; line <= 4; line++) {
        let output = "";
        for (let repeat = 1; repeat <= line; repeat++) {
            output += line + " ";
        }
        console.log(output.trim());
    }
}

numberPyramid();
