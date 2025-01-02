function Rotate_90_degree(array) {
    // Create an empty 2D array for the rotated result
    let arr_ans = Array.from({ length: array.length }, () => new Array(array.length).fill(0));
  
    console.log("Original Matrix:");
    for (let row of array) {
      console.log(row.join(" "));
    }
  
    // Rotate the matrix 90 degrees
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        arr_ans[j][array.length - 1 - i] = array[i][j];
        console.log(`Moving array[${i}][${j}] = ${array[i][j]} to arr_ans[${j}][${array.length - 1 - i}]`);
      }
    }
  
    console.log("\nMatrix after 90-degree rotation:");
    for (let row of arr_ans) {
      console.log(row.join(" "));
    }
  
    return arr_ans;
  }
  
  let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  const rotated = Rotate_90_degree(array);
  console.log("\nThe Final rotated matrix is:");
  for (const row of rotated) {
    console.log(row.join(" "));
  }
  