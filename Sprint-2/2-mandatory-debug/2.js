// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Answer: Error because parameters aren't defined, but arguments are passed in.

// Now run the code and compare the output to your prediction
// =============> write the output here
// Answer: It just gets the last digit of the variable 'num'.

// Explain why the output is the way it is
// =============> write your explanation here
// Answer: Parameters aren't defined, so arguments being passed in arent used, so it just uses the 'num' variable referenced within the function as opposed to the arguments passed in.

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// Finally, correct the code to fix the problem
// =============> write your new code here
// Answer:
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
