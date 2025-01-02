var removeElement = function(nums, val) {
    console.log("Initial array:", nums); // Log the initial array
    for (let i = 0; i < nums.length;) {
        console.log(`Loop Start -> i: ${i}, nums: ${nums}`);
        if (nums[i] == val) {
            nums.splice(i, 1); // Remove the element at index `i`
            console.log(`Removed element at index ${i}, nums: ${nums}`);
        } else {
            i++; // Increment `i` if no element is removed
            console.log(`Incremented i to ${i}`);
        }
    }
    console.log("Final array:", nums); // Log the final array
    return nums.length; // Return the new length of the array
};

// Example Usage
let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log("Final length:", removeElement(nums1, val1)); 
// Output: Logs the entire process and final length

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log("Final length:", removeElement(nums2, val2)); 
// Output: Logs the entire process and final length
