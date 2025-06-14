// The function will ignore the numbers being passed into it and always return "3" — the last digit of 103.

// Predict the output of the following code:
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
// Even though the function is called with arguments, those arguments are ignored because getLastDigit() is not set up to receive any input.

// Explain why the output is the way it is
// The function `getLastDigit` is hardcoded to use the global variable `num` (which is 103).
// Even though values (42, 105, 806) are passed into the function, they are ignored.
// That's why we always get 3 (the last digit of 103).
// Finally, correct the code to fix the problem
function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// The function always uses the global variable num = 103.
// It ignores the arguments passed (42, 105, 806) because it does not accept any parameters.
// So every time it just returns the last digit of 103, which is "3".


// This version now takes a parameter and uses it correctly to compute the last digit of any number.
