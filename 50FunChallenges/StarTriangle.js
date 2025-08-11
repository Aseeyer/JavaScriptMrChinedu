function starTriangle() {
    for (let count = 1; count <= 5; count++) {
        let stars = "";
        for (let countB = 1; countB <= count; countB++) {
            stars += "*";
        }
        console.log(stars);
    }
}

starTriangle();
