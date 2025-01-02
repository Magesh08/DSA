function leftrotata(arr, n) {
    let temp = arr[0];
    console.log(`first itiration : ${arr}`);
    
     // storing the first element of the array in a variable
    for (let i = 0; i < n - 1; i++) {
      console.log(`Starting index : ${i}`);
      
      arr[i] = arr[i + 1];
      console.log(`Added index value in index ${i+1}: value ${arr[i + 1]}`);
    }
    arr[n - 1] = temp; // assign the value of the variable at the last index
    console.log(`Added index value in last index ${n-1 + 1}: value ${temp}`);

    for (let i = 0; i < n; i++) {
      console.log(arr[i] + " ");
    }
  }
  
  let n = 5;
    
  let arr = [12, 13, 14, 15, 16];
  leftrotata(arr, n);


// let arr =[4,3,2,16,9]

// console.log(arr.sort());

