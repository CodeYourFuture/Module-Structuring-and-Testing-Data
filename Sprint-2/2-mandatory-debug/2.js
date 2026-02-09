// Predict and explain first...

// Predict the output of the following code:
// =============> It will probaby return the last digit as a string.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> Aha, I was wrong. The outputs for all the console.log is 3
// Explain why the output is the way it is
// =============> because, the function takes 'const num = 103' as input.
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// This code should be working better. It takes the last digit of the number as a string
// and at last, change that string into a number;
function getLastDigit(num) {
  return Number(num.toString().slice(-1));
}
