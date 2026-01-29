// Predict and explain first...

// Predict the output of the following code:
// =============> the last digit of every function call will be 3

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> function is using the num declared before it , not the number passed to it
// Finally, correct the code to fix the problem
// =============> function getLastDigit(num) {

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// Variable num used inside the function, should be passed as an argument
