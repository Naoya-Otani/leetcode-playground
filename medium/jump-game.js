/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i > maxReach) return false;
    if (maxReach >= n - 1) return true;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return false;
};

const steps = [2, 3, 1, 1, 4];
console.log(canJump(steps));
console.log(canJump([3, 2, 1, 0, 4]));

// var canJumpDP = function (nums) {

// };
