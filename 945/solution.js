/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
  // sort and then compare
  var moves = 0
  nums.sort((a, b) => a - b)
  for (i = 0; i < nums.length; i++){
      if (nums[i] == nums[i+1]) {
          nums[i+1]++
          moves++
      }
      if (nums[i] > nums[i+1]) {
          var addMoves = (nums[i] - nums[i+1]) + 1
          nums[i+1] = nums[i+1] + addMoves
          moves = moves + addMoves
      }
  }
  return moves
};