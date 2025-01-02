function missingNumber(nums) {
    console.log("Input array:", nums);

    // Step 1: Calculate the expected sum of numbers from 0 to n
    const n = nums.length;
    console.log("Length of the array (n):", n);

    const expectedSum = (n * (n + 1)) / 2;
    console.log("Expected sum of numbers from 0 to n:", expectedSum);

    // Step 2: Calculate the actual sum of elements in the nums array
    const actualSum = nums.reduce((acc, num) => {
        console.log(`Adding ${num} to sum:`, acc + num);
        return acc + num;
    }, 0);
    console.log("Actual sum of the array elements:", actualSum);

    // Step 3: Calculate the missing number
    const missing = expectedSum - actualSum;
    console.log("Missing number:", missing);

    return missing;
}

// Example usage:
console.log("Output for nums = [3, 0, 1]:", missingNumber([3, 0, 1]));
// console.log("Output for nums = [0, 1]:", missingNumber([0, 1]));
// console.log("Output for nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]:", missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
