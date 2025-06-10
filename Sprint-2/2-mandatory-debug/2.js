// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

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
// The output is incorrect because the `getLastDigit` function is using a fixed variable `num`
// instead of taking the input number as an argument. Therefore, it always returns the last digit of `103`,
// which is `3`, regardless of the input provided in the console.log statements.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}
// Now the function takes a number as an argument and returns its last digit
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// The `getLastDigit` function was not working properly because it was using a fixed variable `num`
// instead of taking the input number as an argument. By modifying the function to accept a parameter,
// it now correctly returns the last digit of the provided number. The corrected function now works as intended,
// allowing it to return the last digit of any number passed to it as an argument.
// The final output now correctly displays the last digits of the numbers 42, 105, and 806 as 2, 5, and 6 respectively.
