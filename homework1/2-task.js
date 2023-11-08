function hanoiSteps(discs) {
    if (discs < 1) {
        console.log("Введіть іншу кількість дисків");
    } else {
        return Math.pow(2, discs) - 1;
    }
}

console.log(hanoiSteps(0));
