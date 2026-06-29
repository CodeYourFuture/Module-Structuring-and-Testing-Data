// Predict and explain first...

// Predict the output of the following code:
// =============> The function is trying to get the last digit of "num"
// but because on "const", the "num" is always locked to "103" leaving the return always "3"

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> Just as predicted, the function is trying to get the last digit, which is always "3"
// Explain why the output is the way it is
// =============> because of "const" the num is always locked to "103"
// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly
// It's not working properly because of the "const num = 103"
// to fix, I have removed the line and added "(num)" after "function getLastDigit"
// In order to define what "num" is.
