function highAndLow(numbers) {
    const numArray = numbers.split(" ").map(Number);
    const maxNum = Math.max(...numArray);
    const minNum = Math.min(...numArray);
    return `${maxNum} ${minNum}`;
}

console.log(highAndLow("33 19 45 -3 49 -5000 -1013 19 1337"));
