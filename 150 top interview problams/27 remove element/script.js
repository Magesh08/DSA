// 🏷️ Problem 27 – Remove Element

// 📚 Tags:
// Array | Two Pointers

// 🧩 Problem Description

// You are given an integer array nums and an integer val.

// Remove all occurrences of val in-place from the array nums.
// The order of the remaining elements may change, and you must return the number of elements that are not equal to val.

// After the operation:

// The first k elements of nums should contain the remaining elements.

// Return k (the count of remaining elements).

// The rest of the array elements (after index k) can be ignored.

// 💡 Example 1

// Input:
// nums = [3,2,2,3], val = 3

// Output:
// 2, nums = [2,2,_,_]

// Explanation:

// The value 3 is removed.

// k = 2 → the first two elements are [2, 2].

// 💡 Example 2

// Input:
// nums = [0,1,2,2,3,0,4,2], val = 2

// Output:
// 5, nums = [0,1,4,0,3,_,_,_]

// Explanation:

// The value 2 is removed.

// The first five elements are any permutation of [0,1,4,0,3].

// k = 5.

// ⚙️ Intuition

// Instead of creating a new array, we can overwrite the elements in-place using the two-pointer technique:

// i → index to place the next valid element.

// j → scans every element.

// If nums[j] !== val, move it to nums[i] and increment i.

// At the end, i will represent the count of valid elements.

// 💻 JavaScript Solution
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  * @tags Array, Two Pointers
//  * @description
//  * LeetCode 27 – Remove Element
//  * Remove all instances of val in-place and return the new length.
//  */
// var removeElement = function(nums, val) {
//     let i = 0; // slow pointer for valid elements

//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== val) {
//             nums[i] = nums[j]; // overwrite unwanted values
//             i++;
//         }
//     }

//     return i; // number of valid elements
// };

// 🧠 Example Run

// Input:
// nums = [0,1,2,2,3,0,4,2], val = 2

// Step	j	nums[j]	Condition	Action	nums (partial)	i
// 1	0	0	keep	nums[0] = 0	[0,1,2,2,3,0,4,2]	1
// 2	1	1	keep	nums[1] = 1	[0,1,2,2,3,0,4,2]	2
// 3	2	2	remove	skip	[0,1,2,2,3,0,4,2]	2
// 4	4	3	keep	nums[2] = 3	[0,1,3,2,3,0,4,2]	3
// 5	5	0	keep	nums[3] = 0	[0,1,3,0,3,0,4,2]	4
// 6	6	4	keep	nums[4] = 4	[0,1,3,0,4,0,4,2]	5
// 7	7	2	remove	skip	—	5

// ✅ Result:
// k = 5,
// nums = [0,1,3,0,4,_,_,_]

// ⏱️ Complexity Analysis

// Time Complexity: O(n) → Traverse all elements once.

// Space Complexity: O(1) → In-place modification.

// ✅ Final Answer:
// Input: [0,1,2,2,3,0,4,2], val = 2
// Output: k = 5, nums = [0,1,3,0,4,_,_,_]