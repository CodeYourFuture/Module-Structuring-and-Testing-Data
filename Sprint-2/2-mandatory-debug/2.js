// Predict and explain first...
// The function intends to take a number and return it's last digit
// Each call of the function will return the same result

// Predict the output of the following code:
// 'The last digit of 42 is 3'
// 'The last digit of 105 is 3'
// 'The last digit of 806 is 3'

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// 'The last digit of 42 is 3'
// 'The last digit of 105 is 3'
// 'The last digit of 806 is 3'

// Explain why the output is the way it is
// Because the function was not correctly defined to accept an argument, It was using a fixed variable instead

// Finally, correct the code to fix the problem
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
