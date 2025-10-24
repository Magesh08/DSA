// 🏷️ Problem 134 – Gas Station

// 📚 Tags:
// Array · Greedy

// 🧩 Problem Description

// There are n gas stations along a circular route, where each station i provides gas[i] units of fuel.

// It costs cost[i] units of gas to travel from station i to station (i + 1) % n.

// You start the journey with an empty tank at one of the gas stations.

// Return the starting gas station’s index if you can travel around the circuit once in the clockwise direction.
// Otherwise, return -1.

// If a solution exists, it’s guaranteed to be unique.

// 💡 Intuition

// We need to determine from which station we can start and complete the loop without running out of gas.

// Let’s observe:

// If the total gas is less than total cost, the journey is impossible → return -1.

// Otherwise, there exists exactly one valid start point.

// The greedy idea:

// Move along the route while tracking tank += gas[i] - cost[i].

// If tank ever becomes negative, it means we cannot start from any previous station —
// so reset start = i + 1 and tank = 0.

// Finally, return the valid starting index.

// ⚙️ Steps

// Compute totalGas and totalCost.

// If totalGas < totalCost, return -1.

// Initialize:

// start = 0

// tank = 0

// Loop through each station:

// Update tank += gas[i] - cost[i]

// If tank < 0, reset start = i + 1 and tank = 0

// Return start

// 💻 JavaScript Solution
// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  * @tags Array, Greedy
//  * @description
//  * LeetCode 134 – Gas Station
//  * Find the starting gas station index using a greedy approach.
//  */
// var canCompleteCircuit = function(gas, cost) {
//     let totalGas = 0, totalCost = 0;
//     let tank = 0, start = 0;

//     for (let i = 0; i < gas.length; i++) {
//         totalGas += gas[i];
//         totalCost += cost[i];
//         tank += gas[i] - cost[i];

//         if (tank < 0) {
//             start = i + 1;
//             tank = 0;
//         }
//     }

//     return totalGas < totalCost ? -1 : start;
// };

// 🧠 Example Run

// Input:

// gas = [1,2,3,4,5]
// cost = [3,4,5,1,2]

// Step	i	gas[i]	cost[i]	tank	start	Comment
// 0	0	1	3	-2	1	Can’t start here
// 1	1	2	4	-2	2	Still can’t
// 2	2	3	5	-2	3	Restart from 3
// 3	3	4	1	3	3	Tank positive
// 4	4	5	2	6	3	Complete circle ✅

// ✅ Output: 3

// ⏱️ Complexity Analysis

// Time Complexity: O(n) → single pass through the stations

// Space Complexity: O(1) → only a few variables used

// ✅ Final Answer

// Input:
// gas = [1,2,3,4,5], cost = [3,4,5,1,2]

// Output:
// 3

let gas = [2,4,3,1,5];
let cost = [5,3,1,2,4];

function gasstation(gas, cost) {
    let totalgas = 0; totalcost = 0;
    let start = 0; tank = 0;
    for (let i = 0; i < gas.length; i++) {
        totalgas += gas[i];
        totalcost += cost[i];
        tank += gas[i] - cost[i];
        if(tank<0){
            start = i+1;
            tank = 0;
        }
    }
    return totalgas < totalcost ? -1 : start;
}
console.log(gasstation(gas,cost));