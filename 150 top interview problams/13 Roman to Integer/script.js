// 🏷️ Problem 13 – Roman to Integer
// 📚 Tags:

// Hash Map String Math

// 🧩 Problem Description

// Roman numerals are represented by seven symbols:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// Roman numerals are typically written from largest to smallest from left to right,
// but there are 6 special subtraction cases:

// I before V (5) or X (10) → 4, 9

// X before L (50) or C (100) → 40, 90

// C before D (500) or M (1000) → 400, 900

// Your task is to convert a Roman numeral to an integer.

// 💡 Intuition

// We traverse the string from left to right, and:

// Compare the current value to the next value.

// If the current < next, we subtract it (subtraction case).

// Otherwise, we add it (normal case).

// ⚙️ Steps

// Create a map of Roman symbols to values.

// Initialize total = 0.

// Loop through the string s:

// If the current symbol’s value is less than the next, subtract it.

// Otherwise, add it.

// Return total.

// 💻 JavaScript Solution
// /**
//  * @param {string} s
//  * @return {number}
//  * @tags Hash Map, String, Math
//  * @description
//  * LeetCode 13 – Roman to Integer
//  * Convert Roman numerals to integers by checking subtraction cases.
//  */
// var romanToInt = function(s) {
//     const romanMap = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let total = 0;

//     for (let i = 0; i < s.length; i++) {
//         const current = romanMap[s[i]];
//         const next = romanMap[s[i + 1]];

//         if (next > current) {
//             total -= current; // subtraction case
//         } else {
//             total += current; // normal case
//         }
//     }

//     return total;
// };

// 🧠 Example Run
// Input:
// s = "MCMXCIV"

// Process:
// Step	Roman	Current	Next	Action	Total
// 1	M	1000	100	+1000	1000
// 2	C	100	1000	-100	900
// 3	M	1000	10	+1000	1900
// 4	X	10	100	-10	1890
// 5	C	100	1	+100	1990
// 6	I	1	5	-1	1989
// 7	V	5	—	+5	✅ 1994
// Output:
// 1994

// ⏱️ Complexity Analysis

// Time Complexity: O(n) → traverse the string once

// Space Complexity: O(1) → fixed-size hash map

// ✅ Final Answer:

// Input:  "MCMXCIV"
// Output: 1994

let latter = "MCMXCIV";

var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        console.log(`loop ${i} current value: ${current}`);
        const next = romanMap[s[i+1]];
        console.log("next value",next);
        if(next>current){  
            total -= current;
        }else{ 
            total += current;
        }
        console.log("After Total",total);

    } 
    return total;   
};

console.log(romanToInt(latter));