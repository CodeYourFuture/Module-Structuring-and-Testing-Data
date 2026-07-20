// Predict and explain first...

// Predict the output of the following code:
// Prediction: All three logs will print "3" (the last digit of the module-level const num = 103)
// because getLastDigit ignores its parameter and always uses the outer num.
// Expected output:
//   The last digit of 42 is 3
//   The last digit of 105 is 3
//   The last digit of 806 is 3

// Original broken code:
// const num = 103;
// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// Actual output matched prediction — all printed "3".

// Explanation: The function has no parameter, so any argument passed in is discarded.
// It always reads the outer `num` variable which is 103.
// Fix: add a parameter to getLastDigit and use it instead of the outer variable.

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
