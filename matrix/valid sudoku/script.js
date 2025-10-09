// 📘 Problem 36: Valid Sudoku

// 🏷️ Tags: Array, Hash Table, Matrix

// 🧠 Step 1: Understand the Problem

// We are given a 9×9 Sudoku board.
// We must check if the board is valid according to Sudoku rules (not necessarily solvable).

// Rules:

// Each row must contain digits 1–9 without repetition.

// Each column must contain digits 1–9 without repetition.

// Each of the nine 3×3 sub-boxes must contain digits 1–9 without repetition.

// 👉 Only filled cells (1–9) matter; empty cells are represented by ".".

// 🧠 Step 2: Constraints

// Board size is always 9×9.

// Each cell is "." or a digit "1"–"9".

// Validity only, not solvability.

// 🧠 Step 3: Naive Idea

// For every filled cell, check:

// If it repeats in the row.

// If it repeats in the column.

// If it repeats in the 3×3 sub-box.

// Time Complexity = O(9²) = O(81), which is fine.

// 🧠 Step 4: Optimized Approach (Hash Sets)

// Use hash sets to track seen numbers:

// rows[i] → set of digits in row i.

// cols[j] → set of digits in column j.

// boxes[k] → set of digits in sub-box k.

// 📌 Formula to map (i, j) to a box index:

// boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

// 🧠 Step 5: Plan

// Initialize 9 sets for rows, cols, and boxes.

// Traverse each cell (i, j):

// If it's ".", skip.

// If number already exists in row/col/box set → return false.

// Else add it.

// If loop finishes, return true.

// 🧠 Step 6: Example Walkthrough

// Example ✅

// board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]


// Traverse row by row.

// No duplicate found in any row, col, or box.

// ✅ Output: true.

// Example ❌

// If first cell is "8" instead of "5",

// In box 0, two "8" exist.

// Return false.

// 🧠 Step 7: Code in JavaScript
// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function(board) {
//     let rows = Array.from({ length: 9 }, () => new Set());
//     let cols = Array.from({ length: 9 }, () => new Set());
//     let boxes = Array.from({ length: 9 }, () => new Set());

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             let num = board[i][j];
//             if (num === ".") continue;

//             let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

//             if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
//                 return false;
//             }

//             rows[i].add(num);
//             cols[j].add(num);
//             boxes[boxIndex].add(num);
//         }
//     }
//     return true;
// };

// 🧠 Step 8: Complexity

// Time: O(81) → O(1) (constant since board size fixed).

// Space: O(81) → O(1).

// ✅ Final Answer:
// The solution checks each row, column, and 3×3 box with hash sets and validates the Sudoku board efficiently.


board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];


function isValidSudoku(board) {
    let row = Array.from({ length : 9 }, () => new Set());
    let col = Array.from({length :9}, () => new Set());
    let box = Array.from({length :9}, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num === ".") continue;
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (row[i].has(num) || col[j].has(num) || box[boxIndex].has(num)) {
                return false;
            }
            row[i].add(num);
            col[j].add(num);
            box[boxIndex].add(num);
        }
    }
    return true;

}
console.log(isValidSudoku(board)) // true


