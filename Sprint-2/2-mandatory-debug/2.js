// Predict and explain first...

// Predict the output of the following code:
// =============> All three console.log statements will say the last digit of the same number: 103. The function getLastDigit() does not use the number passed into it, so the output will always be based on the global variable `num`.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> The function `getLastDigit()` does not take any parameters. Instead, it always uses the variable `num`, which is set to 103. When the function is called with values like `getLastDigit(42)`, `42` is ignored because the function doesn't accept any parameters. As a result, it always converts 103 to a string and returns the last character — "3" — every time. This is why the output shows "3" as the last digit for all numbers, even though it's incorrect.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
