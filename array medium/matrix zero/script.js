// function Matrix_zero(matrix, n, m) {
//   // Mark rows and columns with -1 where 0's are found.
//   function zeroMatrix(matrix, n, m) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < m; j++) {
//         console.log(`Checking matrix[${i}][${j}] = ${matrix[i][j]}`);
        
//         if (matrix[i][j] === 0) {
//           console.log(`Found 0 at matrix[${i}][${j}], marking row ${i} and column ${j}`);
//           row(matrix, n, m, i);  // Mark the row
//           col(matrix, n, m, j);  // Mark the column
//         }
//       }
//     }
//   }

//   // Function to mark the row with -1, except where there are 0's.
//   function row(matrix, n, m, i) {
//     console.log(`matrix of i ${i}`);
    
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] !== 0) {
//         console.log(`Marking matrix[${i}][${j}] (row) as -1`);
//         matrix[i][j] = -1;
//       }
//     }
//   }

//   // Function to mark the column with -1, except where there are 0's.
//   function col(matrix, n, m, j) {
//     console.log(`matrix of j ${j}`);
//     for (let i = 0; i < n; i++) {
//       if (matrix[i][j] !== 0) {
//         console.log(`Marking matrix[${i}][${j}] (column) as -1`);
//         matrix[i][j] = -1;
//       }
//     }
//   }

//   // First mark the rows and columns that need to be zeroed.
//   console.log("Initial matrix:", matrix);
//   zeroMatrix(matrix, n, m);

//   // Replace all -1's with 0's.
//   console.log("Matrix after marking with -1's:", matrix);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] === -1) {
//         console.log(`Replacing matrix[${i}][${j}] from -1 to 0`);
//         matrix[i][j] = 0;
//       }
//     }
//   }

//   return matrix;
// }

// // Test matrix
// let matrix = [
//   [1, 2, 3],
//   [4, 0, 5],
//   [6, 7, 8],
// ];

// let row = matrix.length; // Number of rows
// let col = matrix[0].length; // Number of columns

// console.log("Final matrix:", Matrix_zero(matrix, row, col));

function zeroMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const row = new Array(n).fill(0); // row array
  const col = new Array(m).fill(0); // col array

  console.log("Initial Matrix:");
  for (const r of matrix) {
      console.log(r.join(" "));
  }
  
  // Traverse the matrix:
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (matrix[i][j] === 0) {
              console.log(`Found 0 at matrix[${i}][${j}], marking row[${i}] and col[${j}]`);
              // mark ith index of row with 1:
              row[i] = 1;

              // mark jth index of col with 1:
              col[j] = 1;
          }
      }
  }

  console.log("\nRows to be zeroed:", row);
  console.log("Columns to be zeroed:", col);

  // Finally, mark all (i, j) as 0
  // if row[i] or col[j] is marked with 1.
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (row[i] || col[j]) {
              console.log(`Setting matrix[${i}][${j}] to 0`);
              matrix[i][j] = 0;
          }
      }
  }

  console.log("\nMatrix after zeroing:");
  for (const r of matrix) {
      console.log(r.join(" "));
  }

  return matrix;
}

const matrix = [[1, 1, 1,1], [1, 0, 1,2], [1, 1, 9,4,], [1,0,0,5]];
const ans = zeroMatrix(matrix);

console.log("\nThe Final matrix is:");
for (const row of ans) {
  console.log(row.join(" "));
}
