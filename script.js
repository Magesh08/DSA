// function largestnum(arr) {
//     let lar =arr[0];
//     for (let i = 1; i< arr.length; i++) {
//         console.log(i);
//         if (lar<arr[i]) {
//             lar = arr[i];
//             console.log(i)
//             console.log(lar)
//         }
//     }
//     return lar;
// }
// let arr =[3,2,1,4]
// console.log(largestnum(arr))

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


function ncp(n) {
    for (let i = 1; i <=n; i++) {
        let store ="";
        for (let j = 1; j<=i; j++) {
            store +=j
            
        }
        for (let j = 1; j <= 2*(n-1); j++) {
            store +="."
          
        }
        for (let j = i; j>=1; j--) {
            store +=j
            
        }
        console.log(store)

        
    }
    
    
}
ncp(5)



// Increasing Number Triangle Pattern