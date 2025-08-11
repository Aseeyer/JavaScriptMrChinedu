function reverseCounting() {
    let count = 20;
    while (count >= 10) {
        console.log(count);
        if (count === 15) {
            console.log("Halfway!");
        }
        count--;
    }
}

reverseCounting();
