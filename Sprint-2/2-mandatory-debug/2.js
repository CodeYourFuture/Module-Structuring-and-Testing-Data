// Predict and explain first...

// Predict the output of the following code:
// This function will throw SyntaxError. > Write your prediction here

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

// Now run the code and compare the output to your prediction
//The last digit of 806 is 3 > write the output here
// The last digit of 42 is 3
//The last digit of 105 is 3

// Explain why the output is the way it is
// The output is the way it is, because  of the how functions and parameters work together,
// the num variable should be a parameter function. > write your explanation here
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
// After using the global variable(num) as a function parameter, the function now works properly.