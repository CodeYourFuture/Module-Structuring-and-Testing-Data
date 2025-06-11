// Predict and explain first...

// Predict the output of the following code:
// LogicalError. Num should be a parameter in getLastDigit.We should not use const num defined beforehand.

// const num = 103;

// function getLastDigit() {
//  return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// The output is 3 because we have defined variable num with value 103 beforehand.
// Then we transform number into string by using num.toString(). Next we take the last character
// according to index -1. Then we use this value inside the function. Otherwise the input change every time so the num should be a function parameter.

// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
