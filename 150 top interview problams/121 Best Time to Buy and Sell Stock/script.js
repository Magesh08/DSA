// 🏷️ Problem 121 – Best Time to Buy and Sell Stock

// 📚 Tags: Array, Dynamic Programming, Greedy

// 🧩 Problem Description

// You are given an array prices, where prices[i] is the stock price on day i.

// You can only buy once and sell once later.
// Your goal: maximize profit → (sellPrice - buyPrice)

// If you can’t make a profit, return 0.

// 💡 Intuition

// We want to find two days i < j such that:

// prices[j] - prices[i] is maximum


// Instead of checking every pair (which is O(n²)),
// we can do this in O(n) using a single pass:

// Keep track of the minimum price so far (minPrice)

// At each step, calculate the potential profit

// Update the max profit

// ⚙️ Steps

// Initialize:

// minPrice = Infinity

// maxProfit = 0

// Loop through each price:

// Update minPrice = Math.min(minPrice, currentPrice)

// Calculate profit = currentPrice - minPrice

// Update maxProfit = Math.max(maxProfit, profit)

// Return maxProfit

// 💻 JavaScript Solution
// /**
//  * @param {number[]} prices
//  * @return {number}
//  * @tags Array, Dynamic Programming, Greedy
//  * @description
//  * LeetCode 121 – Best Time to Buy and Sell Stock
//  * Find the max profit by tracking the lowest price and highest profit difference.
//  */
// var maxProfit = function(prices) {
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for (let price of prices) {
//         // Track the minimum price
//         minPrice = Math.min(minPrice, price);
//         // Calculate potential profit
//         maxProfit = Math.max(maxProfit, price - minPrice);
//     }

//     return maxProfit;
// };

// 🧠 Example Walkthrough
// Example 1:
// Input: prices = [7,1,5,3,6,4]

// Day	Price	Min Price	Profit	Max Profit
// 1	7	7	0	0
// 2	1	1	0	0
// 3	5	1	4	4
// 4	3	1	2	4
// 5	6	1	5	✅5
// 6	4	1	3	5

// ✅ Output: 5 (Buy at 1, Sell at 6)

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: No profit can be made since prices only drop.

// ⏱️ Complexity Analysis
// Operation	Time	Space
// Traverse array	O(n)	O(1)
// ✅ Final Answer
// Input: prices = [7,1,5,3,6,4]
// Output: 5
