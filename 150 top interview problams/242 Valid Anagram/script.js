/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let s = "daa";
let t = "aad"
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Decrement counter while traversing t
    for (let char of t) {
        if (!count[char]) return false; // char not in s or count exhausted
        count[char]--;
    }

    return true;
};

console.log(isAnagram(s,t));