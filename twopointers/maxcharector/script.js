function lengthOfLongestSubstring(s) {
    let charSet = new Set(); // To store unique characters in the current window
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0; // Maximum length of the substring without repeating characters

    console.log(`Initial state -> charSet: ${Array.from(charSet)}, left: ${left}, maxLength: ${maxLength}`);
    
    for (let right = 0; right < s.length; right++) {
        console.log(`\nStep ${right + 1}:`);
        console.log(`Checking character '${s[right]}' at index ${right}`);

        // If the character is already in the set, shrink the window from the left
        while (charSet.has(s[right])) {
            console.log(`Duplicate found: '${s[right]}'. Removing '${s[left]}' from charSet`);
            charSet.delete(s[left]);
            left++;
            console.log(`Updated charSet: ${Array.from(charSet)}, left: ${left}`);
        }

        // Add the current character to the set
        charSet.add(s[right]);
        console.log(`Added '${s[right]}' to charSet. Current charSet: ${Array.from(charSet)}`);

        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
        console.log(`Updated maxLength: ${maxLength}`);
    }

    return maxLength;
}

// Example usage
console.log("\nResult:", lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log("\nResult:", lengthOfLongestSubstring("bbbbb"));    // Output: 1
// console.log("\nResult:", lengthOfLongestSubstring("pwwkew"));   // Output: 3
