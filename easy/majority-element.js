/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countMap = new Map()
    for(i=0; i<nums.length; i++){
      if(countMap.has(nums[i]) === false){
        countMap.set(nums[i], 1)
      }else{
        countMap.set(nums[i], countMap.get(nums[i])+1)
      }
    }
    let maxCount = 0;
    let maxCountKey = null;
    for (const [key, value] of countMap.entries()) {
        if (value > maxCount) {
            maxCount = value;
            maxCountKey = key;
        }
    }
    return maxCount
};
console.log(majorityElement([3,2,3]))