function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    console.log("Initial Array:", nums);
    console.log("Target:", target);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`Left: ${left}, Right: ${right}, Mid: ${mid}, Mid Value: ${nums[mid]}`);

        if (nums[mid] === target) {
            console.log(`Target ${target} found at index ${mid}`);
            return mid; // Target found
        }

        if (nums[mid] < target) {
            console.log(`${nums[mid]} < ${target}, so move left to ${mid + 1}`);
            left = mid + 1; // Search the right half
        } else {
            console.log(`${nums[mid]} > ${target}, so move right to ${mid - 1}`);
            right = mid - 1; // Search the left half
        }
    }

    console.log(`Target ${target} not found. Should be inserted at index ${left}`);
    return left; // Target not found, return the insertion position
}

let nums = [2, 4, 6, 8, 7, 10]; // Example array
let target = 4;
console.log("Insertion Index:", searchInsert(nums, target));
