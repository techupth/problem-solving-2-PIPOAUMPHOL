//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result += 1;
    } else if (s[i] === "V") {
      result += 5;
    } else if (s[i] === "X") {
      result += 10;
    } else if (s[i] === "L") {
      result += 50;
    } else if (s[i] === "C") {
      result += 100;
    } else if (s[i] === "D") {
      result += 500;
    } else if (s[i] === "M") {
      result += 1000;
    }
  }

  return result;
};

let result1 = romanToInt("III"); // 3
let result2 = romanToInt("LVIII"); // 58
let result3 = romanToInt("MCMXCIV"); // 1994

console.log(result1);
console.log(result2);
console.log(result3);
