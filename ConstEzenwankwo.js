function getScore() {
    let testScore, examScore;

    while (true) {
        testScore = parseInt(prompt("Enter your test score (0-30):"));
        if (testScore >= 0 && testScore <= 30) break;
        alert("This is an incorrect test score. Please enter a number within 0 and 30.");
    }

    while (true) {
        examScore = parseInt(prompt("Enter your exam score (0-70):"));
        if (examScore >= 0 && examScore <= 70) break;
        alert("This is an incorrect exam score. Please enter a number within 0 and 70.");
    }

    const total = testScore + examScore;
    alert(`Having scored ${testScore} in your test and scoring ${examScore} in your exam\nYour total score is ${total}`);
    return total;
}

function calculateGrade(total) {
    let grade;

    if (total >= 70) {
        grade = 'A';
    } else if (total >= 60) {
        grade = 'B';
    } else if (total >= 50) {
        grade = 'C';
    } else if (total >= 45) {
        grade = 'D';
    } else if (total >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    alert(`And your grade is: ${grade}`);
    return grade;
}

function getFeedback(grade) {
    if (grade === 'A') {
        alert("You had an excellent performance! Keep it up. 🙌🥳🎊");
    } else if (grade === 'B') {
        alert("Good job, keep improving! 😊👌");
    } else if (grade === 'C') {
        alert("Impressive! There is room for improvement 🤒⃕😊👌");
    } else if (grade === 'D') {
        alert("You can do better - keep studying! 💻⋆⭒˚☕️｡⋆");
    } else if (grade === 'E') {
        alert("Poor performance - keep studying! ✧💻☕📝");
    } else {
        alert("You failed. Please attend classes!! ❌📉");
    }
}

function main() {
    while (true) {
        const total = getScore();
        const grade = calculateGrade(total);
        getFeedback(grade);

        const tryAgain = prompt("Do you want to calculate another student's score? (Yes/No):").toLowerCase();
        if (tryAgain !== 'yes') {
            alert("Thank you for using my app, Goodbye!");
            break;
        }
    }
}

main();
