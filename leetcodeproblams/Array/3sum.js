function threeSum(nums) {
    const results = [];
    console.log(`Input array: ${nums}`);
    
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    console.log(`Sorted array: ${nums}`);

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for `i`
        if (i > 0 && nums[i] === nums[i - 1]) {
            console.log(`Skipping duplicate for nums[i] at index ${i}`);
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        console.log(`Processing nums[i] = ${nums[i]} at index ${i}`);
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            console.log(`Checking triplet: (${nums[i]}, ${nums[left]}, ${nums[right]}) => Sum: ${sum}`);

            if (sum === 0) {
                console.log(`Found triplet: (${nums[i]}, ${nums[left]}, ${nums[right]})`);
                results.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for `left` and `right`
                while (left < right && nums[left] === nums[left + 1]) {
                    console.log(`Skipping duplicate for nums[left] at index ${left}`);
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    console.log(`Skipping duplicate for nums[right] at index ${right}`);
                    right--;
                }

                // Move the pointers
                left++;
                right--;
            } else if (sum < 0) {
                console.log(`Sum < 0, moving left pointer from ${left} to ${left + 1}`);
                left++; // If the sum is too small, move `left` to increase the sum
            } else {
                console.log(`Sum > 0, moving right pointer from ${right} to ${right - 1}`);
                right--; // If the sum is too large, move `right` to decrease the sum
            }
        }
    }

    console.log(`Resulting triplets: ${JSON.stringify(results)}`);
    return results;
}

// Example usage
console.log("Output:", threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log("Output:", threeSum([0, 1, 1]));             // Output: []
// console.log("Output:", threeSum([0, 0, 0]));             // Output: [[0, 0, 0]]
