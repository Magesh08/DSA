/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
let matrix = [[1,2,3],[3,1,2],[2,3,1]];

var checkValid = function(matrix) {
    let l = matrix.length;

    for(let i=0; i<l; i++){
        let rowSet = new Set();
        let colSet = new Set();
        for(let j=0; j<l; j++){
            rowSet.add(matrix[i][j]);
            colSet.add(matrix[j][i]);
        }
        if(rowSet.size !== l || colSet.size !== l){
            return false;
        }
    }
    return true;
};
console.log(checkValid(matrix));