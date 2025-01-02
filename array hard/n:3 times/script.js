
// //brute force approach
// function majorityElement(Arr) {
//     const n = Arr.length; // size of the array
//     const ls = []; // list of answers

//     console.log(`Input array: [${Arr}]`);
//     console.log(`Array size (n): ${n}`);
    
//     for (let i = 0; i < n; i++) {
//         console.log(`\nChecking element Arr[${i}] = ${Arr[i]}`);
//         // console.log(i);
//         // console.log(Arr[i]);

//         // selected element is Arr[i]:
//         // checking if Arr[i] is not already
//         // a part of the answer:
//         if (ls.length == 0 || ls[0] != Arr[i]) {
//             let cnt = 0;
     
            
//             console.log(`Element ${Arr[i]} is not in the current answer list: [${ls}]`);
//             console.log(`Counting frequency of ${Arr[i]}`);
            
//             // Count frequency of the current element Arr[i]:
//             for (let j = 0; j < n; j++) {
             
//                 if (Arr[j] == Arr[i]) {
//                     cnt++;
//                 }
//             }

//             console.log(`Frequency of ${Arr[i]} is: ${cnt}`);
//             console.log(`n / 3 is: ${Math.floor(n / 3)}`);

//             // Check if frequency is greater than n/3:
//             if (cnt > Math.floor(n / 3)) {
//                 console.log(`${Arr[i]} appears more than n/3 times`);
//                 ls.push(Arr[i]);
//             } else {
//                 console.log(`${Arr[i]} does not appear more than n/3 times`);
//             }
//         } else {
//             console.log(`${Arr[i]} is already in the answer list, skipping...`);
//         }

//         // If we already haArre two majority elements, stop early:
//         if (ls.length == 2) {
//             console.log("We already haArre two majority elements, stopping early");
//             break;
//         }
//     }

//     return ls;
// }

// const arr = [11, 33, 33, 33, 11,44];
// const ans = majorityElement(arr);
// console.log("\nThe majority elements are: " + ans.join(" "));

// //better approach




function majorityElement(v) {
    const n = v.length; // size of the array
    const ls = []; // list of answers

    // declaring a map:
    const mpp = new Map();

    // least occurrence of the majority element:
    const mini = Math.floor(n / 3) + 1;
    console.log(`Array size: ${n}`);
    console.log(`Minimum occurrence for majority element (n/3 + 1): ${mini}`);
    console.log(`Initial array: ${v}`);

    // storing the elements with their occurrences:
    for (let i = 0; i < n; i++) {
        console.log(`\n--- Iteration ${i + 1} ---`);
        console.log(`Current element: ${v[i]}`);

        if (mpp.has(v[i])) {
            console.log(`Element ${v[i]} already in map with count: ${mpp.get(v[i])}`);
            mpp.set(v[i], mpp.get(v[i]) + 1);
            console.log(`Updated count for ${v[i]}: ${mpp.get(v[i])}`);
        } else {
            mpp.set(v[i], 1);

            
            console.log(`Element ${v[i]} added to map with initial count: 1`);
        }

        // checking if v[i] is the majority element:
        if (mpp.get(v[i]) === mini) {
            console.log(`Element ${v[i]} reached minimum required count (${mini}). Adding to result list.`);
            ls.push(v[i]);
        } else {
            console.log(`Element ${v[i]} does not meet the minimum required count (${mini}).`);
        }

        console.log(`Current majority elements list: ${ls}`);
        if (ls.length === 2) {
            console.log(`Two majority elements found. Exiting loop.`);
            break;
        }
    }

    console.log(`\nFinal majority elements list: ${ls}`);
    return ls;
}

const arr = [11, 33, 33, 11, 33, 11,33,33];
console.log(`Input array: ${arr}`);
const ans = majorityElement(arr);
console.log(`The majority elements are: ${ans.join(", ")}`);
