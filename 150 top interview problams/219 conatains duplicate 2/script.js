// 🏷️ Problem 219 – Contains Duplicate II

// 📚 Tags:
// Array | Hash Map | Sliding Window

// 🧩 Problem Description

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that:

// nums[i] == nums[j], and

// |i - j| <= k

// Otherwise, return false.

// 💡 Example 1:

// Input:
// nums = [1,2,3,1], k = 3
// Output:
// true
// Explanation:
// nums[0] and nums[3] are both 1, and |0 - 3| = 3 ≤ k.

// 💡 Example 2:

// Input:
// nums = [1,0,1,1], k = 1
// Output:
// true
// Explanation:
// nums[2] and nums[3] are both 1, and |2 - 3| = 1 ≤ k.

// 💡 Example 3:

// Input:
// nums = [1,2,3,1,2,3], k = 2
// Output:
// false
// Explanation:
// No two identical numbers are within distance k.

// ⚙️ Intuition

// We want to check if any number repeats within a window of size k.

// ✅ Use a HashMap (or object) to store the most recent index of each number.

// When you find a number again, check if the distance between the current index and the stored index is ≤ k.

// If yes → return true.

// If not → update the index in the map.

// 💻 JavaScript Solution
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  * @tags Array, Hash Map, Sliding Window
//  * @description
//  * LeetCode 219 – Contains Duplicate II
//  * Use a hash map to track indices of elements and check for near duplicates within distance k.
//  */
// var containsNearbyDuplicate = function(nums, k) {
//     const map = new Map(); // store element → last index

//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             // If the previous index is within k distance
//             if (i - map.get(nums[i]) <= k) {
//                 return true;
//             }
//         }
//         // Update the latest index of the current element
//         map.set(nums[i], i);
//     }

//     return false;
// };

// 🧠 Example Run

// Input:
// nums = [1,0,1,1], k = 1

// Step	i	nums[i]	Map Before	Condition	Action	Output
// 1	0	1	{}	—	set(1 → 0)	—
// 2	1	0	{1:0}	—	set(0 → 1)	—
// 3	2	1	{1:0, 0:1}	2−0 = 2 > 1	update(1 → 2)	—
// 4	3	1	{1:2, 0:1}	3−2 = 1 ≤ 1	✅ return true	true
// ⏱️ Complexity Analysis

// Time Complexity: O(n) → single pass through the array

// Space Complexity: O(n) → for the hash map

// ✅ Final Answer:
// Input: [1,0,1,1], k = 1
// Output: true