let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function transposeInPlace(matrix) {
  const m = matrix.length;        // rows of input
  const n = matrix[0].length;     // cols of input
  const res = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
}
 console.log(transposeInPlace(matrix));
    
