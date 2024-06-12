/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var count = {
        0: 0,
        1: 0,
        2: 0,
    } // initialise counts at 0
    for (i = 0; i < nums.length; i++) {
        count[nums[i]]++
    }

    index = 0
    for (i = 0; i < count[0]; i++){
        nums[index++] = 0
    }
        for (i = 0; i < count[1]; i++){
        nums[index++] = 1
    }
        for (i = 0; i < count[2]; i++){
        nums[index++] = 2
    }
};

