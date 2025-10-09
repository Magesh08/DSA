/**
 * @param {number[][]} image
 * @return {number[][]}
 */

let image = [[1,1,0],[1,0,1],[0,0,0]];

var flipAndInvertImage = function(image) {
    let l = image.length;
    let w = image[0].length;
    let ans =[];
    for(let i=0; i<l; i++){
        let row=[];
        for (let j = w - 1; j >= 0; j--){
            row.push(1 - image[i][j]);
            // console.log(row);
        }
        ans.push(row);
    }
    return ans;
};

console.log(flipAndInvertImage(image));