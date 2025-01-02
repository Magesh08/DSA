function longest_sequences(arr) {
  let long_seq = [];
  for (let i = 0; i < arr.length; i++) {
    let leader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        leader = false;
        break;
      }
   
    }
    if (leader) {
        long_seq.push(arr[i]);
      }
  }
  return long_seq;
}

console.log(longest_sequences([203,23, 4, 24, 25, 26, 3, 5, 7, 6]));


function long_seq2(Arr) {
    let ans = [];
    let max = Arr[Arr.length - 1];
    ans.push(max); // Push the last element initially

    // Loop from second-to-last element down to the first
    for (let i = Arr.length - 2; i >= 0; i--) {
        if (Arr[i] > max) {
            ans.push(Arr[i]);
            max = Arr[i]; // Update max when a new leader is found
        }
    }

    return ans;
}

console.log(long_seq2([201, 4, 8, 7, 5]));

