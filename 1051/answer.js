/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    return heights.map((height, i) => height != [...heights].sort((a, b) => a - b)[i]).filter(Boolean).length
};