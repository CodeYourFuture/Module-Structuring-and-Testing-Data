// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict that all three log statements will output: "The last digit of 42 is 3", "105 is 3", "806 is 3"
// Because the getLastDigit function doesn’t use the input — it always returns the last digit of the constant 
// `num = 103`.

// Original Code
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The actual output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The function `getLastDigit` doesn't take any parameter, and it always uses the fixed variable `num = 103`.
// So regardless of the input in the log statements, the function always returns the last digit of 103, which is "3".

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);    // 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`);  // 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`);  // 6

// Now the function works correctly by taking a number as input and returning its last digit.

