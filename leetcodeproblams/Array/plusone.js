function plusOne(digits) {
    console.log("Initial digits:", digits);

    for (let i = digits.length - 1; i >= 0; i--) {
        console.log(`Processing digit at index ${i}: ${digits[i]}`);
        
        if (digits[i] < 9) {
            digits[i]++;
            console.log(`Incremented digit at index ${i} to ${digits[i]}`);
            console.log("Resulting digits:", digits);
            return digits;
        }

        // If the digit is 9, set it to 0 and continue to the next most significant digit
        digits[i] = 0;
        console.log(`Digit at index ${i} was 9, so set it to 0:`, digits);
    }

    // If we exit the loop, it means we had a carry from the most significant digit
    digits.unshift(1);
    console.log("Added 1 at the beginning due to carry:", digits);
    return digits;
}

// Test Cases
console.log("Output for digits = [1, 2, 3]:", plusOne([1, 2, 756]));
// console.log("Output for digits = [4, 3, 2, 1]:", plusOne([4, 3, 2, 1]));
// console.log("Output for digits = [9]:", plusOne([9]));
// console.log("Output for digits = [9, 9, 9]:", plusOne([9, 9, 9]));
