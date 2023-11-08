function maxLeaderHonor(arr, d) {
    const n = arr.length;
    let maxHonor = 0;
    let honorSum1 = 0;
    let honorSum2 = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2===1){
            honorSum1 += arr[i];
        }
        else {
            honorSum2 += arr[i];
        }

        maxHonor = Math.max(honorSum1, honorSum2);
    }

    return maxHonor;
}

const result = maxLeaderHonor([1, 1, 0], 1);
console.log(result);
