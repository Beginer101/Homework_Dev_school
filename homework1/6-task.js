function findMaxDigit(n) {
    if (n < 0) {
        return -1;
    }

    const numberStr = n.toString().split('').map(Number);

    if (numberStr.length === 0) {
        return '0';
    }

    const maxDigits = [];

    while (numberStr.length > 0) {
        let maxDigitIndex = 0;

        for (let j = 1; j < numberStr.length; j++) {
            if (numberStr[j] > numberStr[maxDigitIndex] || (numberStr[j] === 0 && numberStr[maxDigitIndex] === 0)) {
                maxDigitIndex = j;
            }
        }
        maxDigits.push(numberStr[maxDigitIndex]);
        numberStr.splice(maxDigitIndex, 1);
    }
    return maxDigits.join('');
}

console.log(findMaxDigit(42145));
