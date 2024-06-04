/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let prev1 = 2;
  let prev2 = 1;
  let current = 0;
  for (let i = 2; i < n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return current;
};

console.log(climbStairs(4));

// DP

// n=1 => 1
// n=2 => 2
// n=3 => n=1 + n=2
