/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let dict = new Map();
  let sArr = s.split("");
  let tArr = t.split("");
  for (i = 0; i < s.length; i++) {
    if (dict.has(sArr[i]) == false) {
      dict.set(sArr[i], tArr[i]);
    }
  }
  let result = dict.forEach((elem = "") => {
    return (elem += elem);
  });
  return t == result;
};
console.log(isIsomorphic("foo", "bar"));
