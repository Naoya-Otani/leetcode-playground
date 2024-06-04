/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let memo = new Map();
  function rec(n) {
    if (memo.has(n)) return memo.get(n);
    if (n <= 1) return n;
    let result = rec(n - 1) + rec(n - 2);
    memo.set(n, result);
    return result;
  }
  return rec(n);
};
