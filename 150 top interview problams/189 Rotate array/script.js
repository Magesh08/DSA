// 🏷️ Problem 189 – Rotate Array

// 📚 Tags:
// Array Two Pointers Math

// 🧩 Problem Description

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Each rotation moves the last element to the front.

// 💡 Intuition

// Instead of rotating one element at a time (which would be slow),
// we can think of this as reversing parts of the array cleverly.

// When you rotate an array by k steps to the right:

// The last k elements move to the front.

// The first n - k elements shift to the back.

// We can achieve this efficiently by reversing:

// Reverse the entire array.

// Reverse the first k elements.

// Reverse the remaining n - k elements.

// ⚙️ Steps

// Compute k = k % nums.length to handle cases where k > nums.length.

// Define a helper function reverse(nums, start, end) to reverse elements in place.

// Apply three reversals as described.

// 💻 JavaScript Solution
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  * @tags Array, Two Pointers, Math
//  * @description
//  * LeetCode 189 – Rotate Array
//  * Rotate array by reversing parts in O(n) time and O(1) space.
//  */
// var rotate = function(nums, k) {
//     let n = nums.length;
//     k = k % n;

//     const reverse = (arr, start, end) => {
//         while (start < end) {
//             [arr[start], arr[end]] = [arr[end], arr[start]]; // swap
//             start++;
//             end--;
//         }
//     };

//     // Step 1: Reverse the entire array
//     reverse(nums, 0, n - 1);
//     // Step 2: Reverse first k elements
//     reverse(nums, 0, k - 1);
//     // Step 3: Reverse the remaining n-k elements
//     reverse(nums, k, n - 1);
// };

// 🧠 Example Run

// Input:
// nums = [1,2,3,4,5,6,7], k = 3

// Step	Operation	Result
// Initial	—	[1,2,3,4,5,6,7]
// Reverse all	—	[7,6,5,4,3,2,1]
// Reverse first 3	—	[5,6,7,4,3,2,1]
// Reverse last 4	—	[5,6,7,1,2,3,4]

// ✅ Output: [5,6,7,1,2,3,4]

// ⏱️ Complexity Analysis

// Time Complexity: O(n) → Each element is reversed once.

// Space Complexity: O(1) → In-place modification.

// ✅ Final Answer:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]



// method 1

let k = 2;
let nums = [1,2,3,4,5];
let n = nums.length;
k = k % n;
console.log(nums.length);

// function rotatearray(nums,k) {
//     let n = nums.length;
//   k = k % n;
//   let part = nums.splice(n - k); 

//   nums.unshift(...part); 
//   return nums;
// }
// console.log(rotatearray(nums,k));