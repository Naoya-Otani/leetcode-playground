/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[arr.length - i - 1];
    if (word.length > 0) {
      result = word.length;
      break;
    }
  }
  return result;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
