// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The code will log the last digit of the number 103, which is 3, for each of the three console.log statements.
// However, the function `getLastDigit` is not defined to accept any parameters, so it will always return the last 
// digit of the hardcoded `num` variable (103), which is 3.

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The output is the same for all three console.log statements because the `getLastDigit` function does not use the
// parameters passed to it. Instead, it always returns the last digit of the hardcoded variable `num`, which is 103.
// The function should be modified to accept a number as a parameter and return its last digit.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

// Now the function accepts a number as a parameter and returns its last digit
console.log(`The last digit of 42 is ${getLastDigit(42)}`); // Output: 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // Output: 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // Output: 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
