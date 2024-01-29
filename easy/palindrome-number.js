/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) {
    return false
  }
    let str = x.toString();
    let arr = str.split("");
    let flag = true;

    if(arr.length % 2 === 0){
      let former = arr.slice(0,(arr.length / 2 ))
      let latter = arr.slice((arr.length / 2 ),arr.length)
      let reversedFormer = former.reverse();
      for(i=0; i<reversedFormer.length; i++){
        if(reversedFormer[i] !== latter[i]){
          flag = false
          break;
        }
      }
    } else {
      let former = arr.slice(0,((arr.length + 1) / 2 ))
      let latter = arr.slice(((arr.length + 1) / 2 - 1 ),arr.length)
      let reversedFormer = former.reverse();
      for(i=0; i<reversedFormer.length; i++){
        if(reversedFormer[i] !== latter[i]){
          flag = false
          break;
        }
      }
    }
    return flag;
};
isPalindrome(1)