// bruteforce couldn't be submitted as it took too long so needed to use sliding windows
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  var ans = 0
  var odd = 0
  var left = 0, mid = 0

  for (i = 0; i < nums.length; i++) {
      if (nums[i] % 2 !== 0) odd++
      while (odd > k) {
          if (nums[i] % 2 !== 0) odd--
          left++
          mid = left
      }
      if (odd == k) {
          while (nums[mid] % 2 == 0) mid++
          ans = ans + (mid - left) + 1
      }
  }
  return ans
};