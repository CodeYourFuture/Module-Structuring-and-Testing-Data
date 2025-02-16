// Predict and explain first...

// Predict the output of the following code:
// the out put for this code should be 3
// =============> Write your prediction here

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// Answer: Because the variable num is already declared and has a value of 103 and the function getLastDigit is not taking any arguments, so the function is not using the num variable. The function is returning the last digit of the number that is passed as an argument. The function is not taking any arguments, so it is returning the last digit of the number 103, which is 3.
// =============> write your explanation here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
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
// Answer: on the original syntax they was no number value in the parameter, the return statement should the same as the function  parameter.
