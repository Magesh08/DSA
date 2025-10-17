// 🏷️ Problem 392 – Is Subsequence

// 📚 Tags:
// Two Pointers String Greedy

// 🧩 Problem Description

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence is a sequence that can be derived from another string by deleting some (or none) of the characters, without changing the relative order of the remaining characters.

// 🧠 Example 1

// Input:

// s = "abc"
// t = "ahbgdc"


// Output:

// true


// Explanation:
// We can form "abc" from "ahbgdc" by deleting 'h', 'g', and 'd'.
// ✅ "a" → "b" → "c" appears in order.

// 🧠 Example 2

// Input:

// s = "axc"
// t = "ahbgdc"


// Output:

// false


// Explanation:
// There is no way to form "axc" because 'x' does not appear in order in "ahbgdc".

// 💡 Intuition

// We can solve this using two pointers:

// One pointer i for string s

// One pointer j for string t

// We move through t:

// If s[i] == t[j], it means we found a matching character → move both pointers.

// Otherwise, move j (to keep searching in t).

// At the end, if all characters in s were matched, i === s.length.

// ⚙️ Steps

// Initialize i = 0 (pointer for s)

// Loop j through each character in t

// If s[i] === t[j], increment i

// If i reaches the length of s, return true

// After the loop, return false (not all characters matched)

// 💻 JavaScript Solution
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  * @tags Two Pointers, String, Greedy
//  * @description
//  * LeetCode 392 – Is Subsequence
//  * Use two pointers to verify if all characters in `s` appear in `t` in order.
//  */
// var isSubsequence = function(s, t) {
//     let i = 0; // pointer for s
//     let j = 0; // pointer for t

//     while (i < s.length && j < t.length) {
//         if (s[i] === t[j]) {
//             i++;
//         }
//         j++;
//     }

//     return i === s.length;
// };

// 🧠 Example Run

// Input:

// s = "abc";
// t = "ahbgdc";

// Step	i (s[i])	j (t[j])	Match?	Action	i After	j After
// 0	a	a	✅	Move both	1	1
// 1	b	h	❌	Move j	1	2
// 2	b	b	✅	Move both	2	3
// 3	c	g	❌	Move j	2	4
// 4	c	d	❌	Move j	2	5
// 5	c	c	✅	Move both	3	6

// ✅ i === 3 (equals s.length) → return true

// ⏱️ Complexity Analysis
// Operation	Complexity
// Time	O(n) — one pass through t
// Space	O(1) — only uses pointers
// 🧩 Follow-Up (For Large Inputs)

// Suppose there are many incoming s strings (s1, s2, ..., sk) where k ≥ 10⁹.

// Preprocess t once into a character index map, where each character in t stores sorted indices of occurrences.

// For each s, use binary search to find the next valid position in t.

// This allows checking each s efficiently.

// 🔹 Technique: Preprocessing + Binary Search (optimized for multiple queries).

// ✅ Final Answer

// Input:
// s = "abc", t = "ahbgdc"
// Output:
// true


let t = "abc";
let p = "asbrci";
// i=0,1,2
// i=a,b
// j=0,1,2,3,4
// j=a,s,b
function isSubsequence(t,p) {
    let i = 0;
    let j = 0;
    while(i<t.length && j<p.length){
        if (t[i]==p[j]) {
            i++;
        }
        j++;
    }
    return i === t.length;
}

console.log(isSubsequence(t,p));



 
//    let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
//         while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;
//         if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
//         left++;
//         right--;
//     }

//     return true;
    // const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // const reversedString = filteredString.split('').reverse().join('');
    // return filteredString === reversedString;