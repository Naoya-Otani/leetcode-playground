/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indices = new Map();

  for (let index = 0; index < nums.length; index++) {
    const currentNum = nums[index];
    const complement = target - currentNum;
    if (indices.has(complement)) {
      return console.log([indices.get(complement), index]);
    }
    indices.set(currentNum, index);
  }
};
twoSum([3,3], 6);
