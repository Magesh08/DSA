// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// let target = 9;
// let ums = [2,7,11,15];
// var twoSum = function(nums, target) {
//     for(let i = 0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             // if(nums[i]+nums[j] == target) {return nums[i][j];}
//             // console.log(nums[i], nums[j]);
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];      
//             }
//         }
//     }
//     return false;
// };

// console.log(twoSum(ums, target));

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];

// function rotate(matrix){ {

// //     let n = matrix.length;
// //     let m = matrix[0].length;

// //     for(let i=0; i<n; i++){
// //         for(let j=i; j<m; j++){
// //             let temp = matrix[i][j];
// //             // console.log(matrix[1][2]);
// //             // matrix[i][j] = matrix[j][i];
// //             // matrix[j][i] = temp;
// //             // console.log(matrix[i], matrix[j]);
// //             // console.log(matrix[i][j]);
// //         }
// // }
// return [matrix[0][0]+matrix[1][2],matrix[1][2]];   
// }
// }
// console.log(rotate(matrix));
