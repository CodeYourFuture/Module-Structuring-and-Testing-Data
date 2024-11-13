// Predict and explain first...

const num = 103;

function getLastDigit(i) {
  return i.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The issue with the code is that the getLastDigit function is relying on the global variable num instead of using the function arguments,
// so we need to make getLastDigit accept an argument and use it instead of the global num variable.
