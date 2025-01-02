function maxArea(height) {
    let left = 0; // Left pointer
    let right = height.length - 1; // Right pointer
    let maxArea = 0; // Variable to store the maximum area

    console.log("Initial State:");
    console.log(`left: ${left}, right: ${right}, maxArea: ${maxArea}\n`);

    // Loop until the two pointers meet
    while (left < right) {
        // Calculate the current area
        const width = right - left; // Distance between the two pointers
        const currentHeight = Math.min(height[left], height[right]); // Minimum of the two heights
        const area = width * currentHeight; // Area formula

        // Log current state
        console.log(`left: ${left}, height[left]: ${height[left]}, right: ${right}, height[right]: ${height[right]}`);
        console.log(`width: ${width}, currentHeight: ${currentHeight}, area: ${area}`);

        // Update the maximum area if the current area is greater
        maxArea = Math.max(maxArea, area);
        console.log(`Updated maxArea: ${maxArea}\n`);

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++; // Move the left pointer to the right
        } else {
            right--; // Move the right pointer to the left
        }
    }

    // Return the maximum area found
    return maxArea;
}

// Example Usage
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Example 1:");
console.log(`Max Area: ${maxArea(height1)}\n`); // Output: 49

const height2 = [1, 1];
console.log("Example 2:");
console.log(`Max Area: ${maxArea(height2)}\n`); // Output: 1
