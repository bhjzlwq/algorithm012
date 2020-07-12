// https://leetcode-cn.com/problems/3sum/


// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  const res = [];
  if (len < 3) { return res }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > 0) {
      return res;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      let sum = nums[left] + nums[i] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res
};
// 第一遍指针搞错了
// var threeSum = function(nums) {
//   const len = nums.length;
//   const res = [];
//   if(len<3){return res}
//   nums.sort((a,b)=>a-b);
//   for (let i=1;i<len-1;i++){
//     let start = 0;
//     let end = len-1;
//     while (start<i && end>i && nums[start]<=0 && nums[end]>=0 ) {
//       let sum = nums[start]+nums[end]+nums[i]
//       if(sum===0){
//         res.push([nums[start],nums[i],nums[end]].join(","));
//         if(nums[start]===nums[end]){
//           break;
//         }
//         start++;
//         end--;
//       }else if(sum>0){
//         end--;
//       }else{
//         start++;
//       }
//     }
//   }
//   return [...new Set(res)].map(item=>item.split(','))
// };
