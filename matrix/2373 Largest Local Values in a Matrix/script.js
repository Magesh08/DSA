// 🏷️ Problem 2373 – Largest Local Values in a Matrix

// Tags:
// Array · Matrix · Simulation

// 🧩 Problem Description

// You are given an n × n integer matrix grid.
// You need to generate another matrix maxLocal of size (n - 2) × (n - 2) such that:

// maxLocal[i][j] = largest value in the 3 × 3 submatrix of grid 
//                  centered around (i + 1, j + 1)


// In simpler terms, for each possible 3×3 block inside the grid, find the maximum number and store it in maxLocal.

// Return the resulting matrix maxLocal.

// 💡 Examples
// Example 1:

// Input:

// grid = [[9,9,8,1],
//         [5,6,2,6],
//         [8,2,6,4],
//         [6,2,2,2]]


// Output:

// [[9,9],
//  [8,6]]


// Explanation:

// Top-left 3×3 → max = 9

// Top-right 3×3 → max = 9

// Bottom-left 3×3 → max = 8

// Bottom-right 3×3 → max = 6

// Example 2:

// Input:

// grid = [[1,1,1,1,1],
//         [1,1,1,1,1],
//         [1,1,2,1,1],
//         [1,1,1,1,1],
//         [1,1,1,1,1]]


// Output:

// [[2,2,2],
//  [2,2,2],
//  [2,2,2]]


// Explanation:
// The value 2 lies in every 3×3 region, so all elements in the result are 2.

// 🧠 Intuition

// We slide a 3×3 window over the matrix and, for each position, compute the maximum value inside that window.

// Since the window must fit within the boundaries of grid, the resulting matrix has size (n - 2) × (n - 2).

// ⚙️ Steps

// Let n = grid.length.

// Initialize maxLocal = [] to store the results.

// Loop i from 0 to n - 3 (for rows).

// Inside that, loop j from 0 to n - 3 (for columns).

// For each (i, j), scan all 9 elements of the 3×3 submatrix starting at (i, j).

// Find the maximum value and push it into maxLocal[i].

// Return maxLocal.

// 💻 JavaScript Solution
// /**
//  * @param {number[][]} grid
//  * @return {number[][]}
//  * @tags Array, Matrix, Simulation
//  * @description
//  * LeetCode 2373 — Largest Local Values in a Matrix
//  * For each 3×3 submatrix in the grid, find its maximum value.
//  */
// var largestLocal = function(grid) {
//     const n = grid.length;
//     const result = Array.from({ length: n - 2 }, () => Array(n - 2).fill(0));

//     for (let i = 0; i < n - 2; i++) {
//         for (let j = 0; j < n - 2; j++) {
//             let maxVal = 0;
//             for (let x = i; x < i + 3; x++) {
//                 for (let y = j; y < j + 3; y++) {
//                     maxVal = Math.max(maxVal, grid[x][y]);
//                 }
//             }
//             result[i][j] = maxVal;
//         }
//     }

//     return result;
// };

// ⏱️ Complexity Analysis
// Complexity	Explanation
// Time	O(n²) → Each element is part of at most 9 checks
// Space	O((n−2)²) → Output matrix storage
// ✅ Example Run

// Input:

// grid = [[9,9,8,1],
//         [5,6,2,6],
//         [8,2,6,4],
//         [6,2,2,2]]


// Process:

// 3×3 windows:
// [ [9,9,8],
//   [5,6,2],
//   [8,2,6] ] → max = 9

// [ [9,8,1],
//   [6,2,6],
//   [2,6,4] ] → max = 9

// [ [5,6,2],
//   [8,2,6],
//   [6,2,2] ] → max = 8

// [ [6,2,6],
//   [2,6,4],
//   [2,2,2] ] → max = 6


// Result:
// ✅ [[9,9],[8,6]]

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
console.log(largerslocalvalues(grid));