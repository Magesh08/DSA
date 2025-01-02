function merge(nums1, m, nums2, n) {
    console.log("Initial nums1:", nums1);
    console.log("Initial nums2:", nums2);
    console.log(`m = ${m}, n = ${n}`);

    let p1 = m - 1; // Pointer for the last non-zero element in nums1
    let p2 = n - 1; // Pointer for the last element in nums2
    let p = m + n - 1; // Pointer for the last position in nums1

    // Start merging from the end
    while (p1 >= 0 && p2 >= 0) {
        console.log(`Comparing nums1[${p1}] = ${nums1[p1]} and nums2[${p2}] = ${nums2[p2]}`);

        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            console.log(`Placed nums1[${p1}] = ${nums1[p1]} at position ${p}`);
            p1--;
        } else {
            nums1[p] = nums2[p2];
            console.log(`Placed nums2[${p2}] = ${nums2[p2]} at position ${p}`);
            p2--;
        }
        p--;
    }

    // If nums2 still has remaining elements, copy them over
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        console.log(`Placed nums2[${p2}] = ${nums2[p2]} at position ${p}`);
        p2--;
        p--;
    }

    console.log("Final merged nums1:", nums1);
}

// Test Cases
merge([1, 2, 3, 5, 6], 3, [4, 7, 9], 3); // Example 1
// merge([1], 1, [], 0); // Example 2
// merge([0], 0, [1], 1); // Example 3
