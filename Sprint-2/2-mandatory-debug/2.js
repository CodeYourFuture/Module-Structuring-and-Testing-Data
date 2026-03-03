// Predict and explain first...
// this function should square any number but instead we're going to get an error
// Predict the output of the following code:
// =============> Write your prediction here
// I predict that the output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The function `getLastDigit` is not taking any parameters, so it always returns the last digit of the global variable `num` (which is 103). This means that regardless of what number is passed to the function, it will always return 3.
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// the function `getLastDigit` is not working properly because it does not take any parameters, and it always returns the last digit of the global variable `num`. To fix this, we need to modify the function to accept a parameter (the number we want to find the last digit of) and use that parameter instead of the global variable. This way, we can get the correct last digit for each number passed to the function.
