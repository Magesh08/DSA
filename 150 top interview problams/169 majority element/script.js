/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let map ={};

    for(let num of nums){
        map[num]=(map[num]|| 0)+1;
        console.log(map);
        if (map[num] > nums.length / 2) return num;
    }
};