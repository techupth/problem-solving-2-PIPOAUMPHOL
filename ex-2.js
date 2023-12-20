//Exercise 2: Fizz Buzz

const fizzBuzz = function (n) {
  let sum = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      sum.push(i);
    } else if (i % 3 == 0 && i % 5 == 0) {
      sum.push("FizzBizz");
    } else if (i % 3 == 0) {
      sum.push("Fizz");
    } else if (i % 5 == 0) {
      sum.push("Buzz");
    }
  }

  return sum;
};

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
