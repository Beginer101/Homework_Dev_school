function findEvenIndex(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        const leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
        const rightSum = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
}

const result = findEvenIndex([10,-80,10,10,15,35]);
console.log(result);
