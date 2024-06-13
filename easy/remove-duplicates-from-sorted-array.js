/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  let map = new Map();
  for (i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) == undefined) {
      // 重複がない
      map.set(nums[i], i);
      k++;
    } else {
      // 重複あり
      for (ii = 0; map.get(nums[i + ii]) !== undefined; ii++) {}
    }
  }
  return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
