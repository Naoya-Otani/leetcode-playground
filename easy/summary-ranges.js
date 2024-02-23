/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let result = [];
  let startIndex = 0;
  for (i = 1; i <= nums.length; i++) {
    if(i == nums.length || nums[i] > nums[i - 1] + 1) {
      let endIndex = i - 1;
      if (startIndex < endIndex){
        result.push(`${nums[startIndex]}->${nums[endIndex]}`)
      } else {
        result.push(nums[startIndex].toString())
      }
      startIndex = i;
    }
  }
  return result;
};

console.log(summaryRanges([0,1,2,4,5,7]));