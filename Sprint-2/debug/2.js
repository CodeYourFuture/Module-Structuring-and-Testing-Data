// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//The problem with this code is that the getLastDigit function always uses the num variable, which is globally defined as 103
// instead of taking the argument that is passed to the function. As a result, the function always returns the last digit of 103, regardless of what number is passed to it
//To fix this, you need to update the getLastDigit function to use the argument passed to it, not the global num variable.
function getLastDigit(num) {
  return num.toString().slice(-1); // Use the 'num' argument passed to the function
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
//The getLastDigit function now accepts a parameter num, which represents the number you want to get the last digit of
