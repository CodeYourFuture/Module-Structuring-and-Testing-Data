// Predict and explain first
// The three calls will all return the value 3

// Predict the output of the following code:
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3

// Explain why the output is the way it is
// the function always uses the constant num, which is set to 103, so it always returns '3'

// Finally, correct the code to fix the problem
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
function getLastDigit(n) {
  return n.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// the function  always uses the constant num which is set to 10; it ignores other arguments and consistently returns "3", the last digit of 103

