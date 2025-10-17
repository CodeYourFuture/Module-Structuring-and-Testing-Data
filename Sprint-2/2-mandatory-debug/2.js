// Predict and explain first...

// Predict the output of the following code:
// =============> Prediction:
// The program will print:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// because the function always uses the constant 'num' (103) and ignores the numbers we pass.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// ===========
