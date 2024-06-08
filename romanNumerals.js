function toRomanLazy(num) {
  let output = ""
  let romanNumeralToArabic = {
    I: 1, 
    V : 5, 
    X : 10, 
    L : 50, 
    C : 100, 
    D : 500, 
    M : 1000,
    };
  let romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"]
  // for (const [key, value] of Object.entries(romanNumeralToArabic)) {
  //   console.log(`${key}: ${value}`);
  // }
  for (let i of romanNumeralPriorityOrder){
    
    let temp = Math.floor(num/romanNumeralToArabic[i])
    if(temp != 0){
      for(let j = 0; j < temp; j++){
        output += i
      }
      num = num - temp * romanNumeralToArabic[i]
    }
  }
  return output
  // for(let i = 0; i < romanNumeralPriorityOrder.length; i++){
  // console.log(romanNumeralPriorityOrder[i])
  // } 
//   console.log(`dict value : ${romanNumeralToArabic["M"]}`)
}
function toRoman(num) {
  let output2 = ""
  let romanNumToA = {
    I: 1, 
    IV: 4,
    V : 5,
    IX: 9, 
    X : 10, 
    XL: 40,
    L : 50, 
    C : 100,
    CD: 400,
    D : 500, 
    CM: 900,
    M : 1000,
    };
  let romanNumPriorityOrder = ["M", "CM", "D", "CD", "C", "L", "XL", "X", "IX", "V", "IV", "I"]

  for (let i of romanNumPriorityOrder){
    let temp = Math.floor(num/romanNumToA[i])
    if(temp != 0){
      for(let j = 0; j < temp; j++){
        output2 += i
      }
      num = num - temp * romanNumToA[i]
    }
  }
  return output2
}

console.log(toRomanLazy(4) === "IIII");
console.log(toRomanLazy(150) === "CL");
console.log(toRomanLazy(944) === "DCCCCXXXXIIII");

console.log(toRoman(4) === "IV");
console.log(toRoman(150) === "CL");
console.log(toRoman(944) === "CMXLIV");

module.exports = { toRoman, toRomanLazy };
