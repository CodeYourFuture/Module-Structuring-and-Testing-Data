// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// # The last digit of 42 is 3
// # The last digit of 105 is 3
// # The last digit of 806 is 3

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// # The last digit of 42 is 3
// # The last digit of 105 is 3
// # The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// # The output is incorrect because the function getLastDigit does not take any parameters.
// # It always returns the last digit of the number 103, which is 3, regardless of the input.
// # The function should take a number as an argument and return its last digit.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

// This program should tell the user the last digit of each number.

// Explain why getLastDigit is not working properly - correct the problem
// # The function getLastDigit was not designed to accept an argument, so it always returned the last digit of the hardcoded number 103.
// # The function should accept a number as an argument and return its last digit.
