// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Prediction: The function will always return "3" because it uses the hardcoded value 103.

/* Original code:
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#function_parameters

// The function does not use the input number passed in.
// It always returns the last digit of the variable `num`, which is 103.
// To fix this, the function should accept a parameter and use that instead of the hardcoded value.

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

// The original function was not working as it wasn't taking any parameters and always used the variable `num = 103`.
// So no matter what number you passed in, the function would ignore it and always returned the hardcoded value, "103" 
// instead, which was "3", in this case.