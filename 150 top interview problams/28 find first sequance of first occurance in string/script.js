// 🏷️ Problem 28 – Find the Index of the First Occurrence in a String

// 📚 Tags:
// String Two Pointers Brute Force

// 🧩 Problem Description

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// 🧠 Example 1

// Input:

// haystack = "sadbutsad"
// needle = "sad"


// Output:

// 0


// Explanation:
// The substring "sad" occurs at index 0 and again at index 6.
// The first occurrence is at index 0, so we return 0.

// 🧠 Example 2

// Input:

// haystack = "leetcode"
// needle = "leeto"


// Output:

// -1


// Explanation:
// "leeto" does not occur in "leetcode", so return -1.

// 💡 Intuition

// We need to find the position where the substring needle first appears in haystack.

// The simplest approach is to:

// Loop through haystack.

// For each index i, check if the substring starting at i matches needle.

// If found, return i.

// Otherwise, return -1.

// ⚙️ Steps

// Loop through haystack from 0 to haystack.length - needle.length.

// For each index i, extract a substring of length needle.length.

// Compare it to needle.

// If they match, return i.

// If no match is found, return -1.

// 💻 JavaScript Solution
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  * @tags String, Two Pointers
//  * @description
//  * LeetCode 28 – Find the Index of the First Occurrence in a String
//  * Uses built-in indexOf() for simplicity.
//  */
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };

// 💻 Alternative (Manual Check – Without Built-in Methods)
// var strStr = function(haystack, needle) {
//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         if (haystack.slice(i, i + needle.length) === needle) {
//             return i;
//         }
//     }
//     return -1;
// };

// 🧠 Example Run

// Input:

// haystack = "sadbutsad";
// needle = "sad";

// Step	i	Substring	Match?
// 0	0	"sad"	✅
// 1	1	"adb"	❌
// 2	2	"dbu"	❌
// 6	6	"sad"	✅ (second occurrence, ignored)

// ✅ Output: 0

// ⏱️ Complexity Analysis
// Operation	Complexity
// Time	O(n × m) in manual version, O(n) with indexOf
// Space	O(1)

// ✅ Final Answer:
// Input: "sadbutsad", "sad"
// Output: 0



