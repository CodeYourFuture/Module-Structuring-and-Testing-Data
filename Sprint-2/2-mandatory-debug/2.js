// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// This function getLastDigit is trying to get the last digit of a number but will not work because it has no parameter

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
// =============> write your explanation here
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

/* This function getLastDigit is trying to get the last digit of a number but will not work because it has no parameter. It instead declares the variable globally and the function will reference it as argument when we call the function because it was declared globally. This will print 3 for each call
*/
