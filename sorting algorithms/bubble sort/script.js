function selectionSort(arr) {
  let n = arr.length;

  console.log("Starting Selection Sort Debugging:");

  // Selection sort
  for (let i = 0; i < n - 1; i++) {
    let mini = i;
    console.log(`Pass ${i + 1}:`);

    // Find the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      console.log(`Comparing arr[${j}] (${arr[j]}) with arr[${mini}] (${arr[mini]})`);
      if (arr[j] < arr[mini]) {
        mini = j;
        console.log(`New minimum found at index ${mini}: ${arr[mini]}`);
      }
    }

    // Swap the found minimum element with the first element
  console.log(arr[mini]);
  console.log(arr[i]);
  
  
    if (mini !== i) {
      console.log(`Swapping arr[${i}] (${arr[i]}) with arr[${mini}] (${arr[mini]})`);
      let temp = arr[mini];
      console.log(`before swap arrray ${arr}`);
      console.log(mini);
      console.log(i);
      
      
      arr[mini] = arr[i];
      

      console.log(`aftwer  swap arrray ${arr}`);
      
  
      
      arr[i] = temp;

    }

    console.log("Array after pass:", arr.join(" "));
  }

  console.log("After selection sort:");
  console.log(arr.join(" "));
}

// Initial array
let arr = [13, 46, 24, 52, 20, 9];
console.log("Before selection sort:");
console.log(arr.join(" "));
selectionSort(arr);
