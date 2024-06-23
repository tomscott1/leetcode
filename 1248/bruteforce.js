/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {

  function isNice(arr) {
      var oddArr = arr.map((a) => a % 2 !== 0).filter(Boolean).length
      return k == oddArr
  }

  var ans = 0;
  for (i = 0; i < nums.length; i++) {
      for (j = i + 1; j <= (nums.length); j++) {
          if(isNice(nums.slice(i, j))) ans++
      }
  }
  return ans
};