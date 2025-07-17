// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The output will be the same, `3`, for all three calls.
// This is because the function ignores its input parameter and always operates on the global constant `num`.

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
// The function `getLastDigit` is defined without any parameters, so it cannot use the numbers (42, 105, 806) being passed to it.
// Instead the function accesses the global constant `num` (which is 103) every time it is called.
// Therefore, it always resolves the last digit of 103, which is '3'.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigitFixed(inputNumber) {
  return inputNumber.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigitFixed(42)}`);
console.log(`The last digit of 105 is ${getLastDigitFixed(105)}`);
console.log(`The last digit of 806 is ${getLastDigitFixed(806)}`);
