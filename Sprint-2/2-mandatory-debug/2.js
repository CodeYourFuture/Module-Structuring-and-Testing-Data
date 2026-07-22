// Predict and explain first...

// Predict the output of the following code:
// I believe that in each case, the output will be the last digit of 103, which is 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// The function getLastDigit() does not accept a parameter.
// Consequently, it always uses the global variable num, whose value is 103.

// Finally, correct the code to fix the problem
// const num = 103;
// function getLastDigit(num) {
//  return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// getLastDigit() is not working properly because it always uses the global num variable (103).
// I added num as a parameter so that the function can accept the value passed as an argument.
