// 🏷️ Problem 45 – Jump Game II

// 📚 Tags:
// Array · Greedy · Dynamic Programming

// 🧩 Problem Description

// You are given a 0-indexed array of integers nums where each element represents the maximum length of a forward jump from that position.

// Your task is to return the minimum number of jumps required to reach the last index.
// It is guaranteed that you can reach the end.

// 💡 Intuition

// This is a Greedy problem — at each step, we always try to jump to the farthest point we can currently reach.

// We maintain two important variables:

// farthest: the farthest index we can reach so far.

// currentEnd: the end of the range for the current jump.

// Whenever we reach currentEnd, it means we’ve used one jump,
// so we increase the jump count and move currentEnd to farthest.

// This ensures minimum jumps with O(n) time.

// ⚙️ Steps

// Initialize:

// jumps = 0

// farthest = 0

// currentEnd = 0

// Loop through the array (until the second last index):

// Update farthest = max(farthest, i + nums[i])

// If i === currentEnd, increment jumps and set currentEnd = farthest

// Return jumps

// 💻 JavaScript Solution
// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @tags Array, Greedy, Dynamic Programming
//  * @description
//  * LeetCode 45 – Jump Game II
//  * Find the minimum number of jumps to reach the last index using greedy traversal.
//  */
// var jump = function(nums) {
//     let jumps = 0;
//     let farthest = 0;
//     let currentEnd = 0;

//     for (let i = 0; i < nums.length - 1; i++) {
//         farthest = Math.max(farthest, i + nums[i]);
//         if (i === currentEnd) {
//             jumps++;
//             currentEnd = farthest;
//         }
//     }

//     return jumps;
// };

// 🧠 Example Run

// Input:

// nums = [2,3,1,1,4]

// Step	i	nums[i]	farthest	currentEnd	jumps	Comment
// 1	0	2	2	2	1	Jump from index 0 to 1–2 range
// 2	1	3	4	2	1	Extend farthest reach
// 3	2	1	4	4	2	Jump again to reach the end

// ✅ Output: 2

// ⏱️ Complexity Analysis

// Time Complexity: O(n) → single pass through the array

// Space Complexity: O(1) → constant extra variables

// ✅ Final Answer

// Input:
// nums = [2,3,1,1,4]
// Output:
// 2