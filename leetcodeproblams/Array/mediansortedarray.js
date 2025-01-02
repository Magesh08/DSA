var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array for optimized binary search
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;
    let left = 0, right = m;

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2); // Partition for nums1
        const partition2 = Math.floor((m + n + 1) / 2) - partition1; // Partition for nums2

        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];
        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];

        // Check if the partitions are correct
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Median calculation
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // Move left in nums1
            right = partition1 - 1;
        } else {
            // Move right in nums1
            left = partition1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid.");
};

// Example Usage
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0

nums1 = [1, 2];
nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
