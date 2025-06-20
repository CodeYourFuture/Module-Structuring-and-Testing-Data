// Predict and explain first...

// Predict the output of the following code:
// =============> Since 'num' is defined as a global variable,
// the function getLastDigit will always return the last digit of 103.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here:
// "The last digit of 42 is 3"
//"The last digit of 105 is 3"
//"The last digit of 806 is 3"

// Explain why the output is the way it is
// =============> The output is always 3 because the variable `num` is defined globally as 103,
// and the function `getLastDigit` is not using any parameter.

// Finally, correct the code to fix the problem
// =============> Here's the corrected code:
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
