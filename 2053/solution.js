/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  let distinctStrings = []
  let indices = []
  arr.forEach((str, i) => {
      let idx = arr.indexOf(str);
      while (idx !== -1) {
          indices.push(idx);
          idx = arr.indexOf(str, idx + 1);
      }
      if (indices.length === 1) distinctStrings.push(str)

      indices = []
  })
  return distinctStrings[k-1] ? distinctStrings[k-1] : ""
};