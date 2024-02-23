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
    let iterator = countMap.entries();
    while(iterator.next !== undefined){
      iterator = iterator.next();
      if(maxCount < iterator.value){
        maxCount = iterator.value
      }
    }
    return maxCount;
};
console.log(majorityElement([3,2,3]))