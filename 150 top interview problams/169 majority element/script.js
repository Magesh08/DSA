// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
let nums = [1,2,1];

var majorityElement = function(nums) {
    
    let map ={};

    for(let num of nums){
        map[num]=(map[num]|| 0)+1;
        console.log(map);
        // if (map[num] > nums.length / 2) return num;
    }
};
console.log(majorityElement(nums))