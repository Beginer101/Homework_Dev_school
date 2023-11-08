function totalIslandPerimeter(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    let totalPerimeter = 0;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === 'X') {
                let landPerimeter = 4;

                for (const [dx, dy] of directions) {
                    const newRow = i + dx;
                    const newCol = j + dy;

                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && arr[newRow][newCol] === 'X') {
                        landPerimeter--;
                    }
                }

                totalPerimeter += landPerimeter;
            }
        }
    }

    return `Total land perimeter: ${totalPerimeter}`;
}

const example = [
    'XXXXX',
    'XOOOX',
    'XOOOX',
    'XOOOX',
    'XXXXX'
];

console.log(totalIslandPerimeter(example));
