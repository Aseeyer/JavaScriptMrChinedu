function starDiamond() {
    const starCounts = [1, 3, 5, 3, 1];
    let line;

    for (let count of starCounts) {
        line = "";
        for (let s = 0; s < count; s++) {
            line += "*";
        }
        console.log(line);
    }
}

starDiamond();
