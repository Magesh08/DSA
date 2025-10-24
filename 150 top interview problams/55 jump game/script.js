// 🧩 Problem 55 – Jump Game
// 📝 Description

// You are given an integer array nums, where each element represents your maximum jump length from that position.
// You start at index 0, and you need to check if it’s possible to reach the last index.

// 💡 Example
// Example 1
// Input: nums = [2,3,1,1,4]
// Output: true


// Explanation:
// From index 0, jump 1 step to index 1 (value 3), then 3 steps to the last index.

// Example 2
// Input: nums = [3,2,1,0,4]
// Output: false


// Explanation:
// You’ll always get stuck at index 3 (value 0) — can’t reach the end.

// 🧠 Intuition

// We just need to track how far we can reach at any point.

// Start with maxReach = 0.

// Iterate through the array:

// If you ever reach an index i that is beyond maxReach, you can’t go further — return false.

// Otherwise, update maxReach = max(maxReach, i + nums[i]).

// If the loop finishes, return true.

// ⚡ Optimal Solution (Greedy)

// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(1)

// ✅ JavaScript Code
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) {
//     let maxReach = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (i > maxReach) return false; // stuck before reaching i
//         maxReach = Math.max(maxReach, i + nums[i]);
//     }

//     return true;
// };

// 🔍 Step-by-step Example

// Input: [2,3,1,1,4]

// Index	Value	Max Reach Calculation	maxReach
// 0	2	max(0, 0+2) = 2	2
// 1	3	max(2, 1+3) = 4	4
// 2	1	max(4, 2+1) = 4	4
// 3	1	max(4, 3+1) = 4	4
// 4	4	End reached ✅	—

// Result → true

// 💬 Tags

// #Array #DynamicProgramming #Greedy #JumpGame #LeetCode55