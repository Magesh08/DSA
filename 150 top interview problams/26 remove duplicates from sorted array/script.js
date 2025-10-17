// 🏷️ Problem 26 – Remove Duplicates from Sorted Array

// 📚 Tags:
// Array | Two Pointers

// 🧩 Problem Description

// You are given an integer array nums sorted in non-decreasing order.

// Remove the duplicates in-place such that each unique element appears only once, keeping the relative order of elements the same.

// Return the number of unique elements k.

// After modifying the array in-place,

// the first k elements of nums should be the unique values,

// the remaining elements can be ignored.

// 💡 Example 1

// Input:
// nums = [1,1,2]

// Output:
// 2, nums = [1,2,_]

// Explanation:
// Unique elements are [1, 2], so return k = 2.

// 💡 Example 2

// Input:
// nums = [0,0,1,1,1,2,2,3,3,4]

// Output:
// 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Explanation:
// Unique elements are [0,1,2,3,4], so return k = 5.

// ⚙️ Intuition

// Since the array is sorted, duplicates will always be next to each other.

// We can use the two-pointer technique:

// i keeps track of the position of the last unique element.

// j scans through the array.

// Whenever a new unique number is found (nums[j] != nums[i]), we move i forward and update nums[i] = nums[j].

// At the end, the first i + 1 elements of nums are unique.

// 💻 JavaScript Solution
// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @tags Array, Two Pointers
//  * @description
//  * LeetCode 26 – Remove Duplicates from Sorted Array
//  * Use two pointers to overwrite duplicates and return count of unique elements.
//  */
// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0;

//     let i = 0; // slow pointer for unique position

//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j]; // move unique element forward
//         }
//     }

//     return i + 1; // number of unique elements
// };

// 🧠 Example Run

// Input:
// nums = [0,0,1,1,1,2,2,3,3,4]

// Step	i	j	nums[i]	nums[j]	Action	nums (partial)
// 1	0	1	0	0	same → skip	[0,0,1,1,1,2,2,3,3,4]
// 2	0	2	0	1	diff → i=1, nums[1]=1	[0,1,1,1,1,2,2,3,3,4]
// 3	1	3	1	1	same → skip	[0,1,1,1,1,2,2,3,3,4]
// 4	1	5	1	2	diff → i=2, nums[2]=2	[0,1,2,1,1,2,2,3,3,4]
// 5	2	7	2	3	diff → i=3, nums[3]=3	[0,1,2,3,1,2,2,3,3,4]
// 6	3	9	3	4	diff → i=4, nums[4]=4	[0,1,2,3,4,2,2,3,3,4]

// ✅ Result:
// k = 5,
// nums = [0,1,2,3,4,_,_,_,_,_]1

// ⏱️ Complexity Analysis

// Time Complexity: O(n) → Traverse the array once

// Space Complexity: O(1) → In-place modification

// ✅ Final Answer:
// Input: [0,0,1,1,1,2,2,3,3,4]
// Output: k = 5, nums = [0,1,2,3,4,_,_,_,_,_]