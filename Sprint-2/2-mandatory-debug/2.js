// Predict and explain first...

// Predict the output of the following code:
// =============> Prediction:
// The code will not throw an error, but the output will be `undefined`
// because the `getLastDigit` function does not accept any parameters,
// and it uses a hardcoded variable `num` instead of the passed argument. 

/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> Output:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> Explanation:
// The output is not as expected because the `getLastDigit` function does not
// use the argument passed to it. Instead, it uses a hardcoded variable `num`
// which is set to `103`. Therefore, the function always returns the last digit
// of `103`, which is `3`, regardless of the input provided in the function call.

// Finally, correct the code to fix the problem
// =============> Correction:

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// Output:
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6
