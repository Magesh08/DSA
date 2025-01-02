/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1]; // Start with the first row
    console.log(`Start: row = ${row}`);

    for (let i = 1; i <= rowIndex; i++) {
        let newRow = [1]; // Start each row with 1
        console.log(`Iteration ${i}: Starting newRow = ${newRow}`);

        // Compute the intermediate values for the current row
        for (let j = 1; j < row.length; j++) {
            const sum = row[j - 1] + row[j];
            console.log(`  Adding sum of row[${j - 1}] (${row[j - 1]}) + row[${j}] (${row[j]}) = ${sum}`);
            newRow.push(sum);
        }

        newRow.push(1); // End each row with 1
        console.log(`  Ended newRow = ${newRow}`);
        row = newRow; // Update the row for the next iteration
        console.log(`Updated row = ${row}`);
    }

    console.log(`Final row: ${row}`);
    return row; // Return the final row
};
rowIndex = 3
console.log(getRow(rowIndex));
