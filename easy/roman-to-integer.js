/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanMap = new Map();
    romanMap.set("I",1)
    romanMap.set("V",5)
    romanMap.set("X",10)
    romanMap.set("L",50)
    romanMap.set("C",100)
    romanMap.set("D",500)
    romanMap.set("M",1000)

    let arr = s.split("");
    let sum =0;
    for (i=0; i<arr.length; i++){
      let int = romanMap.get(arr[i])
      let next = romanMap.get(arr[i+1])
      if(int<next){
        sum -= int
      }else{
        sum += int
      }
    }

    console.log(sum)
};

romanToInt("III")