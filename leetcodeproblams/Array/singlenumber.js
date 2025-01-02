function singleNumber(nums) {
    let result = 0; // Initialize result to 0

    console.log("Initial result:", result);

    for (let i = 0; i < nums.length; i++) {
        console.log(`Step ${i + 1}:`);
        console.log(`  Current number: ${nums[i]}`);
        console.log(`  Current result before XOR: ${result}`);
        
        // XOR the current number with the result
        result ^= nums[i];
        
        console.log(`  Current result after XOR: ${result}`);
    }

    return result;
}

// Test cases
let nums1 = [2, 1, 2];
console.log("Unique number in [2, 2, 1]:", singleNumber(nums1));

// let nums2 = [4, 1, 2, 1, 2];
// console.log("Unique number in [4, 1, 2, 1, 2]:", singleNumber(nums2));

// let nums3 = [1];
// console.log("Unique number in [1]:", singleNumber(nums3));
