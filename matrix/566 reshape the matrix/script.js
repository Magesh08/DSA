// 📘 Problem 566: Reshape the Matrix

// Tags: Array, Matrix, Simulation

// 🧠 Step 1: Problem Understanding

// We are asked to implement a reshape function similar to MATLAB’s reshape.

// Input:

// A 2D matrix mat of size m x n.

// Two integers r and c, which represent the desired reshaped matrix dimensions.

// Output:

// If reshaping is possible (i.e., the number of elements matches), return the reshaped matrix.

// Otherwise, return the original matrix.

// 🔑 Key Observations

// Total elements in the original matrix = m * n.

// Total elements in the reshaped matrix = r * c.

// Reshape is only possible if m * n == r * c.

// 🧠 Step 2: Example Dry Runs

// Example 1:

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Flattened order: [1, 2, 3, 4]
// Reshape to 1x4 → [[1,2,3,4]]

// Output: [[1,2,3,4]]


// Example 2:

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Original size = 2x2 = 4
// New size = 2x4 = 8 → mismatch
// So return original.

// Output: [[1,2],[3,4]]

// 🧠 Step 3: Approach
// ✅ Algorithm

// Compute m * n and compare with r * c.

// If not equal, return mat.

// Flatten the matrix into a 1D list.

// Fill values into the new r x c matrix row by row.

// Return the reshaped matrix.

// ⏱️ Complexity Analysis

// Time Complexity: O(m * n) (flatten and rebuild).

// Space Complexity: O(m * n) (for reshaped matrix).

// 🧑‍💻 Step 4: Code in JavaScript
// /**
//  * @param {number[][]} mat
//  * @param {number} r
//  * @param {number} c
//  * @return {number[][]}
//  */
// var matrixReshape = function(mat, r, c) {
//     let m = mat.length;
//     let n = mat[0].length;

//     // If reshape not possible
//     if (m * n !== r * c) return mat;

//     // Flatten the matrix
//     let flat = [];
//     for (let row of mat) {
//         for (let val of row) {
//             flat.push(val);
//         }
//     }

//     // Build reshaped matrix
//     let res = [];
//     let index = 0;
//     for (let i = 0; i < r; i++) {
//         let row = [];
//         for (let j = 0; j < c; j++) {
//             row.push(flat[index++]);
//         }
//         res.push(row);
//     }

//     return res;
// };

// // Example Runs
// console.log(matrixReshape([[1,2],[3,4]], 1, 4)); // [[1,2,3,4]]
// console.log(matrixReshape([[1,2],[3,4]], 2, 4)); // [[1,2],[3,4]]

// 🧠 Step 5: Thought Process for DSA Practice

// Break down problems into conditions (when valid / invalid).

// Start from simple simulation approach (flatten → reshape).

// Optimize only when needed.

// ✅ Final Answer: Works in O(m*n) with O(m*n) space.


let r =1, c =4;
let mat = [[1,2],[3,4]];


// /**
//  * @param {number[][]} mat
//  * @param {number} r
//  * @param {number} c
//  * @return {number[][]}
//  */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    if (m * n !== r * c) return mat;

    let flat =[];
    for(let row of mat){
        for(let val of row){
            flat.push(val);
        }
    }
    return flat;






    // let res = [];
    // let index = 0;
    // for (let i = 0; i < r; i++){
    //     let row = [];
    //     for (let j = 0; j < c; j++){
    //         row.push(flat[index++]);
    //     }
    //     res.push(row);
    // }
    // return res;
};

console.log(matrixReshape(mat, r, c));

