function nCr(n, r) {
    let res = 1;

    console.log(`Calculating nCr(${n}, ${r}):`);
    // calculating nCr:
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        console.log(`Iteration ${i + 1}: res * (n - ${i}) = ${res}`);
        res = res / (i + 1);
        console.log(`Iteration ${i + 1}: res / (${i + 1}) = ${res}`);
    }
    return res;
}

function pascalTriangle(r, c) {
    console.log(`Getting element from Pascal's Triangle at row ${r} and column ${c}`);
    const element = nCr(r - 1, c - 1);
    console.log(`Element at position (${r}, ${c}) is: ${element}`);
    return element;
}

const r = 5; // row number
const c = 3; // column number
const element = pascalTriangle(r, c);
console.log(`The element at position (${r},${c}) is: ${element}`);
