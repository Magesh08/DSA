// 📘 Problem 766: Toeplitz Matrix

// 🏷️ Tags: Array, Matrix

// 🧠 Step 1: Understand the Problem

// We are given an m x n matrix.
// A matrix is Toeplitz if every diagonal from top-left → bottom-right has the same value.

// 👉 In other words,

// matrix[i][j] == matrix[i-1][j-1] for all valid i, j.

// 🧠 Step 2: Naive Approach

// Compare each diagonal one by one.

// For each diagonal, check if all elements are equal.

// But this requires checking many diagonals separately → not efficient.

// 🧠 Step 3: Optimized Insight

// We don’t need to extract diagonals.
// 👉 Just check if every cell equals the cell diagonally above-left:

// matrix[i][j] == matrix[i-1][j-1]

// This works because:

// If every element matches its top-left neighbor, then all diagonals are consistent.

// 🧠 Step 4: Dry Run with Example

// Example 1:

// matrix = [[1,2,3,4],
//           [5,1,2,3],
//           [9,5,1,2]]

// Check (1,1)=1 vs (0,0)=1 ✅  
// Check (1,2)=2 vs (0,1)=2 ✅  
// Check (1,3)=3 vs (0,2)=3 ✅  
// Check (2,1)=5 vs (1,0)=5 ✅  
// Check (2,2)=1 vs (1,1)=1 ✅  
// Check (2,3)=2 vs (1,2)=2 ✅  

// All diagonals valid → return true.


// Example 2:

// matrix = [[1,2],
//           [2,2]]

// Check (1,1)=2 vs (0,0)=1 ❌  
// → return false.

// 🧠 Step 5: Plan

// Loop through rows (start from row 1).

// Loop through columns (start from col 1).

// If matrix[i][j] != matrix[i-1][j-1] → return false.

// If we finish loop → return true.

// 🧑‍💻 Step 6: Code (JavaScript)
// /**
//  * @param {number[][]} matrix
//  * @return {boolean}
//  */
// var isToeplitzMatrix = function(matrix) {
//     let m = matrix.length;
//     let n = matrix[0].length;

//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             if (matrix[i][j] !== matrix[i - 1][j - 1]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };

// ✅ Step 7: Complexity Analysis

// Time: O(m * n) → visit every element once.

// Space: O(1) → no extra space used.

// 🔑 Final Answer

// This greedy comparison works because each diagonal consistency can be checked by ensuring local neighbors match.

// let matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];

// var toeplits = function (matrix){
//     let l = matrix.length;
//     let w = matrix[0].length;

//     for (let i =1; i<l; i++){
//         for (let j =1; j<w; j++){
//             if (matrix[i][j] !== matrix[i-1][j-1]){
//                 return false;
//             }
//         }       
//     }
//     return true;
// }
// console.log(toeplits(matrix));

