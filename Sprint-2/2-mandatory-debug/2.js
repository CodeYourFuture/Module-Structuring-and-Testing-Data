// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// All outputs will be "3" because function has no parameter and always uses global num (103)

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// Bug: Function has no parameter, so arguments (42, 105, 806) are ignored. Always uses global num (103)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(number) {
  return number.toString().slice(-1);
}

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
