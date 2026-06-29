// Predict and explain first...

// Predict the output of the following code:
// The function getLastDigit should return the last digit of the number.
// But, it doesn't work properly because it doesn't take any parameters, and the input is always the same, and that is the value of the variable num (103), which is defined in the global scope.
// So, the function should always return the last digit of the number, which is 3, whatever the input value (the argument) is.
// =============> Write your prediction here

// const num = 103;
//
// function getLastDigit() {
//   return num.toString().slice(-1);
// }
//
// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The function getLastDigit doesn't take any parameters, so it doesn't matter what the input value is, it will always return the last digit of the num, defined in the global scope, so the result is always 3.
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
