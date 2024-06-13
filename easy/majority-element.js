/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let dict = new Map();
  for (let i = 0; i < nums.length; i++) {
    current = dict.get(nums[i]);
    if (current) {
      dict.set(nums[i], current + 1);
    } else {
      dict.set(nums[i], 1);
    }
  }
  let max = 0;
  let result = 0;
  dict.forEach((value, key) => {
    if (value > max) {
      max = value;
      result = key;
    }
  });
  return result;
};
console.log(majorityElement([3, 2, 3]));
