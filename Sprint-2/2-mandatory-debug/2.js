// Predict and explain first...

// Predict the output of the following code:
// =============> All the console.logs will say "3" because of "const num = 103;" is going to be where they will all grab from because "function getLastDigit()" is empty instead of num.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> All the console.logs are outputting "3" as the answer.
// Explain why the output is the way it is
// =============> Because in the function getLastDigit only .slice(-1) is functioning and it is taking the num value from "const num = 103;"
// Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
