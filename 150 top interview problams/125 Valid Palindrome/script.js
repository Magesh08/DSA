// 🧩 Problem — Valid Palindrome

// LeetCode #125

// Difficulty: 🟢 Easy
// Tags: String, Two Pointers, Palindrome

// 📝 Problem Description

// A palindrome is a string that reads the same forward and backward.

// Task:

// Given a string s, return true if it is a palindrome after:

// Converting all letters to lowercase

// Removing all non-alphanumeric characters

// Otherwise, return false.

// Alphanumeric characters include letters and numbers.

// 💡 Examples
// Example 1
// Input: s = "A man, a plan, a canal: Panama"
// Output: true


// Explanation:
// After removing non-alphanumeric characters and converting to lowercase:
// "amanaplanacanalpanama" → reads the same forward and backward.

// Example 2
// Input: s = "race a car"
// Output: false


// Explanation:
// After cleaning: "raceacar" → not a palindrome.

// Example 3
// Input: s = " "
// Output: true


// Explanation:
// Empty string after cleaning → palindrome.

// ✅ Optimal Approach — Two Pointers

// Idea:

// Use two pointers, one at the start and one at the end of the string.

// Move inward while checking alphanumeric characters only.

// Compare characters in lowercase.

// If any mismatch → not a palindrome.

// ✅ Code (JavaScript)
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         // Skip non-alphanumeric on the left
//         while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
//         // Skip non-alphanumeric on the right
//         while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;

//         // Compare lowercase characters
//         if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

//         left++;
//         right--;
//     }

//     return true;
// };

// ⏱️ Time Complexity

// O(n) → Each character is processed at most once

// 🧩 Space Complexity

// O(1) → In-place comparison, no extra string needed

// 🧠 Key Points

// Use regular expressions or charCodeAt() to check alphanumeric characters.

// Two pointers make it efficient instead of building a new string.

// Works for empty strings or strings with only non-alphanumeric characters.

// 🏷️ Tags

// #String
// #TwoPointers
// #Palindrome
// #LeetCode125


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric on the left
        while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
        // Skip non-alphanumeric on the right
        while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;

        // Compare lowercase characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
};
