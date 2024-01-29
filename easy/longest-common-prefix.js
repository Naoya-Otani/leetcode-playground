/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a,b)=> {
      return a.length - b.length
    })
    let shortestStr = strs[0]
    let answer=""
    for(i=0;i<shortestStr.length; i++){
      let tester = shortestStr.slice(0,(shortestStr.length -i ))
      for(ii=0;ii<strs.length;ii++){
        if(strs[ii].startsWith(tester) === false){
          break;
        } else {
          if((ii+1) === strs.length){
          answer = tester
          return answer;
        }

        }
      }
    }
    return answer;
};

let strs = ["flower","flow","flight"]
longestCommonPrefix(strs);