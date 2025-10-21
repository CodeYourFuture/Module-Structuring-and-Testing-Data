// Predict and explain first...

// Predict the output of the following code:
// This function will always return the last digit of the number 103.
// This is because the variable num is hardcoded to 103 within the function scope.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// The number 103 is assigned as a constant variable so the function will always use num as 103
// So when the function is called with different arguments, it still returns the last digit of 103 which is 3

// Finally, correct the code to fix the problem
function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
