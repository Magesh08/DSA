// 🧩 Problem — Merge Sorted Array

// LeetCode #88

// Difficulty: 🟢 Easy
// Tags: Array, Two Pointers, In-place, Sorting

// 📝 Problem Description

// You are given:

// Two integer arrays, nums1 and nums2, sorted in non-decreasing order

// Two integers m and n representing the number of elements in nums1 and nums2 respectively

// Task: Merge nums2 into nums1 in-place, so that nums1 becomes a single sorted array.

// Constraints:

// nums1.length == m + n (first m elements are valid, last n elements are 0)

// nums2.length == n

// 💡 Example 1
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// 💡 Example 2
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// 💡 Example 3
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

// 🧠 Optimal Approach — O(m + n) using Two Pointers

// Idea:

// Start from the end of both arrays and merge backwards.

// Why backwards? Because nums1 has extra space at the end. If we merge forward, we might overwrite elements we haven’t processed yet.

// Steps:

// Let p1 = m-1 (last valid element of nums1)

// Let p2 = n-1 (last element of nums2)

// Let p = m + n - 1 (last index of nums1)

// While p1 >= 0 and p2 >= 0:

// Compare nums1[p1] and nums2[p2]

// Put the larger one at nums1[p]

// Move pointers

// If p2 >= 0 (nums2 still has elements), copy remaining elements into nums1

// ✅ Code (JavaScript)
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//     let p1 = m - 1;
//     let p2 = n - 1;
//     let p = m + n - 1;

//     while (p1 >= 0 && p2 >= 0) {
//         if (nums1[p1] > nums2[p2]) {
//             nums1[p] = nums1[p1];
//             p1--;
//         } else {
//             nums1[p] = nums2[p2];
//             p2--;
//         }
//         p--;
//     }

//     // If there are remaining elements in nums2
//     while (p2 >= 0) {
//         nums1[p] = nums2[p2];
//         p2--;
//         p--;
//     }
// };

// ⏱️ Time Complexity

// O(m + n) → Each element is processed once

// 🧩 Space Complexity

// O(1) → In-place merge, no extra space

// 📌 Why This Works

// Merging from the end avoids overwriting elements in nums1 that are still needed.

// Using two pointers ensures O(m + n) time.

// 🏷️ Tags

// #Array
// #TwoPointers
// #InPlace
// #Sorting
// #LeetCode88

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

//looping1: p1- 2, p2 - 2, p - 5
//    nums1 = [1,2,3,0,0,6]; p1=2, p2=1, p=4
//looping2: p1- 2, p2 - 1, p - 4
//    nums1 = [1,2,3,0,5,6]; p1=2, p2=0, p=3    
//looping3: p1- 1, p2 - 1, p - 3
//    nums1 = [1,2,3,3,5,6]; p1=1, p2=0, p=2
//looping4: p1- 0, p2 - 1, p - 2
//    nums1 = [1,2,2,3,5,6]; p1=0, p2=-1, p=1
//looping5: p1- 0, p2 - 0, p - 1
//    nums1 = [1,2,2,3,5,6]; p1=0, p2=-1, p=0
//looping6: p1- 0, p2 - -1, p - 0

function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    while (p1 >= 0 && p2 >= 0) {  
    if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1]; 
        p1--;   
    } else {
        nums1[p] = nums2[p2]; //p=6,5 
        p2--;
    }
    p--;
}

// If there are remaining elements in nums2
while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
}

console.log(nums1)
}


merge(nums1, m, nums2, n)


let i = 0;

while(i<10){
    console.log(i);
    i++;
    if(i==5){
        break;
    }
    
}