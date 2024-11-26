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
//The getLastDigit() function doesn’t take any arguments and is hardcoded to always return the last digit of 103. That's why the output is "3" regardless of the input values (42, 105, or 806).

//To fix this, the function needs to accept a number as an argument and then compute the last digit of that number, instead of using the hardcoded num variable.
//Here is the corrected code:
/* BE AWARE THIS FUNCTION 👇👇 WILL OVERRIDE THE PREVIOUS ONE 👆👆 */
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
