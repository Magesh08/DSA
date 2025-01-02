/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate2 = function(nums, k) {
    let map = new Map(); // Initialize a HashMap to store the last seen index of each number

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        console.log(`Current index: ${i}, Current element: ${nums[i]}`); // Log the current element and index

        // Check if the number exists in the HashMap and if the condition abs(i - j) <= k is met
        if (map.has(nums[i])) {
            console.log(`Found ${nums[i]} in map at index ${map.get(nums[i])}`);
            if (i - map.get(nums[i]) <= k) {
                console.log(`Condition met: abs(${i} - ${map.get(nums[i])}) = ${i - map.get(nums[i])} <= ${k}`);
                return true; // Return true if we found such a pair
            }
        }

        // Log the current state of the map before updating
        console.log(`Map before update: ${JSON.stringify(Array.from(map))}`);
        
        // Update the HashMap with the current index of the number
        map.set(nums[i], i);

        // Log the updated state of the map
        console.log(`Map after update: ${JSON.stringify(Array.from(map))}`);
    }

    console.log('No nearby duplicate found');
    return false; // Return false if no such pair is found
};

// Example usage:
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
console.log(containsNearbyDuplicate2([1, 0, 1, 1], 1)); // Output: true
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false
