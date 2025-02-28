/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    for (i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }
        else{
            map.set(nums[i]);
        }
    }
    return false;
};