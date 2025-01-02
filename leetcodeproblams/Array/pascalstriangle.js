// function generatePascalsTriangle(numRows) {
//     const triangle = []; // Initialize the result array

//     console.log("Generating Pascal's Triangle for", numRows, "rows");

//     // Step 1: Generate each row
//     for (let i = 0; i < numRows; i++) {
//         const row = []; // Initialize a new row
//         console.log(`\nRow ${i + 1}:`);

//         // Step 2: Add the first element as 1
//         row.push(1);
//         console.log(`  Added first element: ${row}`);

//         // Step 3: Calculate the middle elements based on the previous row
//         for (let j = 1; j < i; j++) {
//             // console.log(` trisngel left ${triangle[i-1][j-1]}`);
//             // console.log(`triangle right ${ triangle[i - 1][j]}`);
            
//             const sum = triangle[i - 1][j - 1] + triangle[i - 1][j];
//             row.push(sum);
//             console.log(`  Calculated position ${j}: ${sum}`);
//         }

//         // Step 4: Add the last element as 1 (for rows > 1)
//             if (i > 0) {
//                 row.push(1);
//                 console.log(`  Added last element: ${row}`);
//             }   

//         // Step 5: Add the row to the triangle
//         triangle.push(row);
//         console.log(`Completed Row ${i + 1}:`, row);
//     }

//     console.log("\nGenerated Pascal's Triangle:", triangle);
//     return triangle;
// }

// // Test cases
// console.log(generatePascalsTriangle(5));
// // console.log(generatePascalsTriangle(1));
function generatePascalsTriangle(numRows) {
    const triangle = []; // Initialize the result array

    console.log("Generating Pascal's Triangle for", numRows, "rows");

    // Step 1: Generate each row
    for (let i = 0; i < numRows; i++) {
        const row = []; // Initialize a new row
        console.log(`\nRow ${i + 1}:`);

        // Step 2: Add the first element as 1
        row.push(1);
        console.log(`  Added first element: ${row}`);

        // Step 3: Calculate the middle elements based on the previous row
        for (let j = 1; j < i; j++) {
            // console.log(` trisngel left ${triangle[i-1][j-1]}`);
            // console.log(`triangle right ${ triangle[i - 1][j]}`);
            
            const sum = triangle[i - 1][j - 1] + triangle[i - 1][j];
            row.push(sum);
            console.log(`  Calculated position ${j}: ${sum}`);
        }

        // Step 4: Add the last element as 1 (for rows > 1)
            if (i > 0) {
                row.push(1);
                console.log(`  Added last element: ${row}`);
            }   

        // Step 5: Add the row to the triangle
        triangle.push(row);
        console.log(`Completed Row ${i + 1}:`, row);
    }

    // console.log("\nGenerated Pascal's Triangle:", triangle);
    return triangle[numRows - 1];
}

// Test cases
console.log(generatePascalsTriangle(5));
// console.log(generatePascalsTriangle(1));
