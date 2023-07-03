//Leetcode : 283.Move Zeroes
//pw: q7
//💡 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
//        Note that you must do this in-place without making a copy of the array.
//        Example 1:
//        Input: nums = [0,1,0,3,12]
//        Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let j = 0
    let i = 1
    while (i < nums.length) {
        if (nums[j] === 0 && nums[i] !== 0) {
            nums[j] = nums[i]
            nums[i] = 0
            j++
        }
        if (nums[j] !== 0) {
            j++
        }
        i++
    }
};
