// 🧩 Problem: 1672. Richest Customer Wealth
// 📝 Description:

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i-th customer has in the j-th bank.

// Return the wealth that the richest customer has.

// A customer's wealth is the sum of all money in their bank accounts.
// The richest customer is the one with the maximum wealth.

// 🔹 Example 1:

// Input:

// accounts = [[1,2,3],[3,2,1]]


// Output:

// 6


// Explanation:

// Customer 1 wealth = 1 + 2 + 3 = 6

// Customer 2 wealth = 3 + 2 + 1 = 6
// Max wealth = 6

// 🔹 Example 2:

// Input:

// accounts = [[1,5],[7,3],[3,5]]


// Output:

// 10

// 🔹 Example 3:

// Input:

// accounts = [[2,8,7],[7,1,3],[1,9,5]]


// Output:

// 17

// ⚙️ Constraints:
// m == accounts.length
// n == accounts[i].length
// 1 <= m, n <= 50
// 1 <= accounts[i][j] <= 100

// ✅ Solution 1 — Using Loops (Easy to Understand)
// var maximumWealth = function(accounts) {
//     let richest = 0;

//     for (let i = 0; i < accounts.length; i++) {
//         let total = 0;
//         for (let j = 0; j < accounts[i].length; j++) {
//             total += accounts[i][j];
//         }
//         richest = Math.max(richest, total);
//     }

//     return richest;
// };

// 🚀 Solution 2 — Using map() + reduce() (Cleaner)
// var maximumWealth = function(accounts) {
//     return Math.max(...accounts.map(customer => 
//         customer.reduce((sum, money) => sum + money, 0)
//     ));
// };

// 🧠 Tags:

// Array

// Matrix

// Math

// Iteration

// Reduce

// Easy