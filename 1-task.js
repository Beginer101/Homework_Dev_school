function multiplesOf3and5(number) {
    if (number < 0) {
        console.log("Введіть інший номер");
    }

    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(multiplesOf3and5(16));
