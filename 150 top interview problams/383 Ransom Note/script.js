// 🏷️ Problem 383 – Ransom Note

// Tags: Hash Table, String, Counting

// 🧩 Problem Description

// You are given two strings:

// ransomNote

// magazine

// Return true if ransomNote can be constructed using letters from magazine.

// Each letter in magazine can only be used once.

// Otherwise, return false.

// 💡 Examples

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false


// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false


// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// ⚙️ Constraints

// 1 <= ransomNote.length, magazine.length <= 10^5

// ransomNote and magazine consist of lowercase English letters.

// 💡 Intuition / Approach

// Count the frequency of each character in magazine.

// Traverse each character in ransomNote:

// If the character exists in magazine count, decrement it.

// If the character does not exist or is exhausted, return false.

// If all characters are satisfied, return true.

// 💻 JavaScript Solution (Optimal)
// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  * @tags Hash Table, String
//  */
// var canConstruct = function(ransomNote, magazine) {
//     let count = {};

//     // Count letters in magazine
//     for (let char of magazine) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     // Check letters in ransomNote
//     for (let char of ransomNote) {
//         if (!count[char]) return false;
//         count[char]--;
//     }

//     return true;
// };

// // Example runs
// console.log(canConstruct("a", "b"));     // false
// console.log(canConstruct("aa", "ab"));   // false
// console.log(canConstruct("aa", "aab"));  // true

// ⏱ Complexity Analysis

// Time Complexity: O(m + n) → traverse both ransomNote and magazine once

// Space Complexity: O(1) → only 26 lowercase letters stored in count


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let count ={};
    for (let char of magazine){
        count[char]= (count[char] || 0) +1;
    }
    for (let char of ransomNote){
        if(!count[char]) return false;
        count[char]--;
    }
    return true;
};