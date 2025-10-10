// 🏷️ Problem 205 – Isomorphic Strings

// Tags: Hash Table, String, Mapping

// 🧩 Problem Description

// You are given two strings s and t.
// Return true if s and t are isomorphic, otherwise return false.

// Two strings are isomorphic if:

// The characters in s can be replaced to get t.

// Each occurrence of a character must map to the same character.

// No two characters may map to the same character, but a character can map to itself.

// 💡 Examples

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Explanation: 'e' → 'a', 'g' → 'd'


// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Explanation: 'o' would need to map to both 'a' and 'r', which is invalid.


// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Explanation: 'p' → 't', 'a' → 'i', 'e' → 'l', 'r' → 'e'

// ⚙️ Constraints

// 1 <= s.length <= 5 * 10^4

// t.length == s.length

// s and t consist of valid ASCII characters.

// 🧠 Intuition

// We need a one-to-one mapping between characters of s and t.
// To ensure this:

// Use two hash maps:

// mapST: maps s → t

// mapTS: maps t → s

// Traverse both strings:

// If mapping exists, check consistency.

// If not, create new mapping.

// If any conflict is found, return false.

// 💻 JavaScript Solution (Optimal)
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  * @tags Hash Table, String
//  */
// var isIsomorphic = function(s, t) {
//     if (s.length !== t.length) return false;

//     let mapST = {};
//     let mapTS = {};

//     for (let i = 0; i < s.length; i++) {
//         const a = s[i];
//         const b = t[i];

//         if ((mapST[a] && mapST[a] !== b) || (mapTS[b] && mapTS[b] !== a)) {
//             return false;
//         }

//         mapST[a] = b;
//         mapTS[b] = a;
//     }

//     return true;
// };

// // Example Runs
// console.log(isIsomorphic("egg", "add"));    // true
// console.log(isIsomorphic("foo", "bar"));    // false
// console.log(isIsomorphic("paper", "title"));// true

// ⏱️ Complexity Analysis

// Time Complexity: O(n) → single pass through the strings

// Space Complexity: O(1) → constant extra space (at most 256 ASCII chars)

// ✅ Summary
// Aspect	Description
// Approach	Use two hash maps to maintain one-to-one mapping
// Best For	Checking character mapping consistency
// Difficulty	Easy
// Data Structure	Hash Table

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  * @tags Hash Table, String
//  */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let mapST = {};
    let mapTS = {};

    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        const b = t[i];
        console.log(mapST[a]);
        if ((mapST[a] && mapST[a] !== b) || (mapTS[b] && mapTS[b] !== a)) {
            return false;
        }

        mapST[a] = b;
        mapTS[b] = a;
    }

    return true;
};

// Example Runs
console.log(isIsomorphic("egg", "add"));    // true
// console.log(isIsomorphic("foo", "bar"));    // false
// console.log(isIsomorphic("paper", "title"));// true
