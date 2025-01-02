// function largestnum(arrs) {
//     let lar =arrs[0];
//     for (let i = 1; i< arrs.length; i++) {
//         console.log(i);
//         if (lar<arrs[i]) {
//             lar = arrs[i];
//             console.log(i)
//             console.log(lar)
//         }
//     }
//     return lar;
// }
// let arrs =[3,2,1,4]
// console.log(largestnum(arrs))

// patterns

//Star Pyramid

// function sp(n) {
//     for (let i = 0; i < n; i++) {
//         let store =""
//             for (let j = 0; j<n-i-1; j++) {
//                     store +="."
//             }
//             for (let j = 0; j< 2*i+1; j++) {
//                     store +="*"
                
//             }
         
//             for (let j = 0; j<n-i-1; j++) {
//                 store +=" "
//         }
//         console.log(store)
//     }
// }
// sp(5)

// INVERTED PYRAMID

// function ip(n) {
//     for (let i = 0; i < n; i++) {
//         let store =""
//         for (let j = 0; j < i; j++) {
//             store +="."
            
//         }
//         for (let j = 0; j < n*2-1; j++) {
//             store +="*"
//         }
//         for (let j = 0; j < i; j++) {
//             store +="."
            
//         }
//         console.log(store)
//     }
// }

// ip(5)

// number crown pattern 


// function ncp(n) {
//     for (let i = 1; i <=n; i++) {
//         let store ="";
//         for (let j = 1; j<=i; j++) {
//             store +=j
            
//         }
//         for (let j = 1; j <= 2*(n-1); j++) {
//             store +="."
          
//         }
//         for (let j = i; j>=1; j--) {
//             store +=j
            
//         }
//         console.log(store)

        
//     }
    
    
// }
// ncp(5)



// Increasing Number Triangle Pattern

// Count digits in a number 

// function counddiinnum(n) {
//     let x= n;
//     let count =0;
//     while (x !== 0 ) {
//         x =Math.floor(x/10);
//         count++;

//     }
//     console.log(count) ;
// }

// counddiinnum(12323454)

// let N = 123;
// let num = N;
// let reverse = 0;

// while (N !== 0) {
//     let digit = N % 10;
//     reverse = reverse * 10 + digit;
//     N = Math.floor(N / 10);
// }

// console.log(`The reverse of ${num} is ${reverse}`);
//Palindrome or Not
// let N = 12345
// let n= N;
// let reverse =0;

// while (N!==0) {
//     let digit = N%10;
//     reverse = reverse *10 + digit;
//     N= Math.floor(N/10);
//     console.log(N)
//     console.log(digit)
//     console.log(reverse)

// }

// console.log(reverse)
// gcd
// let num1 = 6, num2 = 9;
// let ans;

// for (let i = 1; i <= Math.min(num1, num2); i++) {
//   if (num1 % i === 0 && num2 % i === 0) {
    
//     ans = i;   
//   }
//   console.log("num1 :",num1 % i,"num2 :",num2 % i)
//   console.log("gcd loop answer",ans)
// }

// console.log("The GCD of the two numbers is " + ans);

// Function to print array
// function printArray(ans) {
//   console.log("The reversed array is:-");
//   for (let i = 0; i < ans.length; i++) {
//     console.log(ans[i] + " ");
//   }
// }

// // Function to reverse array using an auxiliary array
// function reverseArray(arr) {
//   let n = arr.length;
//   let ans = [];

//   for (let i = n - 1; i >= 0; i--) {
//     ans.push(arr[i]);
//   }

//   printArray(ans);
// }

// // Main function
// function main() {
//   let arr = [5, 4, 3, 2, 1];
//   reverseArray(arr);
// }

// // Call the main function
// main();

// function reverse(arr) {

  
//      let len = arr.length;
//      let narr= new Array; 
//      for (let i = len -1; i >= 0; i--) {
//         narr[len-i-1]=arr[i];

      
//      }
//      console.log(narr);

// }
// reverse([1,2,3,4,5]) 


// function palindromstr(s) {
//    console.log(s)
//    let left =0, right=s.length-1;
//    while (left<right) {
//       if (!s[left].match(/[a-zA-Z0-9]/)) {
//          left ++;
//       }
//       else if(!s[right].match(/[a-zA-Z0-9]/)){
//          right--;
//       }

//    }
//    return true;
// }

// let ans=palindromstr("abcdcba")  
   
// if (ans) {
//    console.log("Palindrome");
// } else {
//    console.log("Not Palindrome");
// }

function selectionSort(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
     let minIndex = i;
     for (let j = i + 1; j < arr.length; j++) {
       if (arr[j] < arr[minIndex]) {
         minIndex = j;
       }
     }
 
     // Swap
     let temp = arr[minIndex];
     arr[minIndex] = arr[i];
     arr[i] = temp;
   }
 }
 
 let arr = [ 2, 1, 3,4];
 selectionSort(arr);
 console.log("After selection sort:", arr);
 