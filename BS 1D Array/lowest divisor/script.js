function sumByD(arr, div) {
    let n = arr.length; // size of array
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.ceil(arr[i] / div);
    }
    console.log(`sumByD with divisor ${div}: ${sum}`); // Log the sum for the given divisor
    return sum;
}

function smallestDivisor(arr, limit) {
    let n = arr.length;
    if (n > limit) return -1;
    let low = 1;
    let high = Math.max(...arr);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log(`low: ${low}, high: ${high}, mid: ${mid}`); // Log the current state of low, high, and mid

        let currentSum = sumByD(arr, mid);
        console.log(`Sum by dividing with ${mid}: ${currentSum}`); // Log the sum for the current divisor

        if (currentSum <= limit) {
            high = mid - 1;
            console.log(`Sum <= limit. New high: ${high}`); // Log when we adjust the high
        } else {
            low = mid + 1;
            console.log(`Sum > limit. New low: ${low}`); // Log when we adjust the low
        }
    }
    console.log(`Final smallest divisor: ${low}`); // Log the result
    return low;
}

let arr = [1, 2, 3, 4, 5];
let limit = 8;
let ans = smallestDivisor(arr, limit);
console.log("The minimum divisor is:", ans);
