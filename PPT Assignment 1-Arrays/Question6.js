//Leetcode : 217 Contains Duplicate
//pw :**Q6.**
//        Given an integer array nums, return true if any value appears at least twice in the array, and return false if
//        every element is distinct.
//
//        **Example 1:**
//        Input: nums = [1,2,3,1]
//        Output: true


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};