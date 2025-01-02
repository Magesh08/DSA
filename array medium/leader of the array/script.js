function leader(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let isLeader = true;
        console.log(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= arr[i]) {
                isLeader = false;
                break;
            }
        }
        if (isLeader) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(leader([1, 22, 8, 6, 7]));  // Output: [7]



function leader_optimal(arr) {
    let max = arr[arr.length-1];
    let ans2 = [];
    ans2.push(arr[arr.length-1]);
    for (let i = arr.length - 2; i >= 0; i--) {  // Start loop from the end
        if (arr[i] > max) {
            max = arr[i];
            ans2.push(arr[i]);
        }
    }
    
    return ans2.reverse();
      // Reverse to maintain the correct order
}

console.log(leader_optimal([1, 22, 8, 6, 7]));  // Output: [22, 8, 7]
