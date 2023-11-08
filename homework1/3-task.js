function findNb(m) {
    let n = 1;
    let volume = 0;

    while (volume < m) {
        volume += Math.pow(n, 3);
        n++;
    }

    if (volume === m) {
        return n - 1;
    } else {
        return -1;
    }
}

console.log(findNb(1071225));
