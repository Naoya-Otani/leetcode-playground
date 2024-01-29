/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    if(s.length % 2 !== 0){
      return false
    }
    let strArr = s.split("")
    const dict = new Map([
      [")", "("],  ["}", "{"], ["]", "["]
    ])
    let stack = []
    for (i=0; i<strArr.length; i++){
      if(typeof dict.get(strArr[i]) !== "string"){
        stack.push(strArr[i])
      } else {
        if (dict.get(strArr[i]) === stack[stack.length - 1]){
          stack.pop()
        } else {
          return false
        }
      }
    }
    return stack.length === 0
}

console.log(isValid("()[]{}"))