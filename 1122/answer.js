/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var ans = [];
    for (i=0; i < arr2.length; i++) {
        ans.push(arr1.filter((a) => a === arr2[i]))
    }
    // now compare current ans to arr 1
    var remainder = [];
    ans = ans.flat()
    remainder = arr1.filter((x) => !ans.includes(x)).sort((a,b) => a - b)
    return ans.concat(remainder)
};