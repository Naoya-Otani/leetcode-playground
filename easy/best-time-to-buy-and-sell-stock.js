/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let least = prices[0];
  let profit = 0;
  for(i=1; i<prices.length; i++){
    if(least > prices[i]){
      least = prices[i]
    } else {
      if(prices[i] - least > profit) {
        profit = prices[i] - least
      }
    }
  }
  return profit
};

console.log(maxProfit([7,1,5,3,6,4]))
// maxProfit([7,1,5,3,6,4])