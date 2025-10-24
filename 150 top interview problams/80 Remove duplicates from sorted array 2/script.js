// 🏷️ Problem 80 – Remove Duplicates from Sorted Array II

// 📚 Tags:
// Array Two Pointers

// 🧩 Problem Description

// You are given a sorted integer array nums.
// Modify the array in-place such that each unique element appears at most twice, keeping the order.

// Return the length k of the modified array, where the first k elements are the valid ones.

// 💡 Intuition

// Since the array is sorted, duplicates appear consecutively.
// We can use the two-pointer technique:

// One pointer (i) to iterate through the array.

// Another pointer (k) to track the position of the next valid element.

// We allow each number to appear up to twice, so:

// If the current element nums[i] is different from nums[k - 2], it’s valid to keep it.

// Otherwise, skip it.

// ⚙️ Steps

// If the array length ≤ 2, return its length (all are valid).

// Initialize k = 2 (the position to insert the next valid number).

// From index 2 onward:

// Compare nums[i] with nums[k - 2].

// If they differ → keep nums[i] and increment k.

// Return k as the count of valid elements.

// 💻 JavaScript Solution
// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @tags Array, Two Pointers
//  * @description
//  * LeetCode 80 – Remove Duplicates from Sorted Array II
//  * Keep each number at most twice using two-pointer technique.
//  */
// var removeDuplicates = function(nums) {
//     if (nums.length <= 2) return nums.length;

//     let k = 2; // pointer for next valid position

//     for (let i = 2; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 2]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// };

// 🧠 Example Run

// Input:
// nums = [0,0,1,1,1,1,2,3,3]

// Step	i	nums[i]	nums[k-2]	Action	nums (in-place)	k
// 2	2	1	0	keep	[0,0,1,…]	3
// 3	3	1	0	keep	[0,0,1,1,…]	4
// 4	4	1	1	skip	—	4
// 5	5	1	1	skip	—	4
// 6	6	2	1	keep	[0,0,1,1,2,…]	5
// 7	7	3	1	keep	[0,0,1,1,2,3,…]	6
// 8	8	3	2	keep	[0,0,1,1,2,3,3,…]	7

// ✅ Output:
// k = 7
// nums = [0,0,1,1,2,3,3,_,_]

// ⏱️ Complexity

// Time: O(n) → Single pass through the array

// Space: O(1) → In-place, no extra array

// ✅ Final Answer:
// Input: [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]

let nums = [0,0,1,1,1,1,2,3,3];

function Removeduplicates(nums) {
    let k = 2;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== nums[k-2]){
            nums[k]=nums[i];
            k++;
        }
    }
    return k;
}
console.log(Removeduplicates(nums));

