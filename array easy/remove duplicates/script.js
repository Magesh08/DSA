function removeDuplicates(arr1) {
    let i = 0;  // Pointer for the last unique element
    console.log("Initial array:", arr1);

    for (let j = 1; j < arr1.length; j++) {
        console.log(`\nIteration ${j}:`);
        console.log(`Comparing arr1[${i}] = ${arr1[i]} with arr1[${j}] = ${arr1[j]}`);
        
        if (arr1[i] !== arr1[j]) {
            i++;  // Move the pointer to the next unique element position
            arr1[i] = arr1[j];  // Replace the value at i with the new unique value
            console.log(`Found new unique element. Updating arr1[${i}] = ${arr1[j]}`);
        } else {
            console.log("Duplicate found, no action taken.");
        }
        
        console.log("Array so far:", arr1.slice(0, i + 1));
    }
    
    console.log("\nFinal array with duplicates removed:", arr1.slice(0, i + 1));
    return i + 1;  // Return the new length of the array without duplicates
}

const arr1 = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr1);

console.log("\nThe array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
    console.log(arr1[i]);
}

// function removeDuplicatesUnsorted(arr) {
//     let uniqueSet = new Set();  // A set to keep track of unique elements
//     let writeIndex = 0;         // This will track the index where we write unique elements

//     console.log("Initial array:", arr);

//     for (let j = 0; j < arr.length; j++) {
//         console.log(`\nIteration ${j}:`);
//         console.log("Current element:", arr[j]);
//         console.log("Set before checking:", uniqueSet);

//         if (!uniqueSet.has(arr[j])) {
//             uniqueSet.add(arr[j]);
//             arr[writeIndex] = arr[j];  // Write the unique element to the current writeIndex
//             console.log(`Added ${arr[j]} to set. Writing at index ${writeIndex}`);
//             writeIndex++;  // Move to the next writeIndex for the next unique element
//         } else {
//             console.log(`${arr[j]} is already in the set, skipping.`);
//         }

//         console.log("Set after checking:", uniqueSet);
//         console.log("Array so far:", arr.slice(0, writeIndex));  // Slice to show the valid part of the array
//     }

//     console.log("\nFinal array with duplicates removed:", arr.slice(0, writeIndex));
//     return writeIndex;  // Return the new length of the array without duplicates
// }

// // Testing the function with the provided example
// let arr = [1, 3, 4, 3, 2, 2];
// let lengthWithoutDuplicates = removeDuplicatesUnsorted(arr);

// console.log("\nNew length of array without duplicates:", lengthWithoutDuplicates);
// console.log("Modified array without duplicates:", arr.slice(0, lengthWithoutDuplicates));
