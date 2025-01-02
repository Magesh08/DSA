// function missingNumber(a, N) {
//     // Outer loop that runs from 1 to N:
//     for (let i = 1; i <= N; i++) {
//       // flag variable to check if an element exists
//       let flag = 0;
  
//       // Search the element using linear search:
//       for (let j = 0; j < N - 1; j++) {
//         if (a[j] === i) {
//             console.log(a[j]);
//           // i is present in the array:
//           flag = 1;

//           break;
//         }
//       }
  
//       // check if the element is missing (i.e., flag === 0):
//       if (flag === 0) {
//         console.log(i);
//         return i;
        
//       }
//     }
  
//     // The following line will never execute.
//     // It is just to avoid warnings.
//     return -1;
//   }
  
//   function main() {
//     const N = 5;
//     const a = [ 1,2,4];
//     const ans = missingNumber(a, N);
//     console.log("The missing number is:", ans);
//   }
  
//   main();
//   console.log("hiu")

//   function clicked(){
//     console.log("hi dude");
//   }
  
  
function numberduplicate(arr,n){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]== n){
      count = count+1;
    }
  }
  return count;
}

let arr=[1,2,3,3,4,5,5];
console.log(numberduplicate(arr,5))