// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// num is declared outside of the function. So when getLastDigit is called it will return undefined.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

// 1) num isn't defined as the function's parameter so the function can take arguments later on when it's called.
// 2) .slice(-1) is used to get the last digit of num inside the function.
// 3) The function does not take any parameters so when it is called with an arguments it always returns the last digit of the constant num 103.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// Now the num is passed to the function as a parameter. 
// Therefore the function will return the last digit of the number when it is when it is called and passed with an argument.