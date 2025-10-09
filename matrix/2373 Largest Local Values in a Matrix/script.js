let grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]];

function largerslocalvalues(grid) {
   const n = grid.length;
    const result = Array.from({ length: n - 2 }, () => Array(n - 2).fill(0));

    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            let maxVal = 0;
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    maxVal = Math.max(maxVal, grid[x][y]);
                }
            }
            result[i][j] = maxVal;
        }
    }

    return result;
}