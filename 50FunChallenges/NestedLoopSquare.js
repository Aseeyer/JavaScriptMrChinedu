function starSquare() {
    for (let line = 1; line <= 4; line++) {
        let stars = "";
        for (let count = 1; count <= 4; count++) {
            stars += "*";
        }
        console.log(stars);
    }
}

starSquare();
