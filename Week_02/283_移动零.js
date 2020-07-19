/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var len = nums.length;
  var i = 0;
  while (i < len) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      len--;
    } else {
      i++
    }
  }
};
