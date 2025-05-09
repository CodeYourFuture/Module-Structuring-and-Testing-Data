// Predict and explain first...
  // this function will fist converts the number to a string then slice the last number form the end using (-1)
// Predict the output of the following code:
// =============> Write your prediction here
 // for the first output is 2 the second is 5 the last output is 6.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
  // the output is deferent. All the out were number 3.
// Explain why the output is the way it is
// =============> write your explanation here
  // Because the console.log can't find the argument in the function (num)
// Finally, correct the code to fix the problem
// =============> write your new code here
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
