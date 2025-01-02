


function floorSqrt(n) {
    let low = 1, high = n;
    // Binary search on the answers:
    console.log(low);
    console.log(high);
    
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log(`mid values ${mid}`);
        
        let val = mid * mid;
        if (val <= n) {
            // Eliminate the left half:
            low = mid + 1;
        }
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }
    return high;
}

let n = 28;
let ans = floorSqrt(n);
console.log("The floor of square root of " + n + " is: " + ans);

