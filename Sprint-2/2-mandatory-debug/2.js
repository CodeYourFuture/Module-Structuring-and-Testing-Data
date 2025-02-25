// Predict and explain first...
// First it finds the function, then finds the variable num and then it goes  through the function and returns
// changed the number to a string and extracts the last digit of the num 103.
// Predict the output of the following code:
// =============> Write your prediction here
// It would provide the output `The last digit of 42 is 1042`

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The function only uses constant variable '103' when it runs the code
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
// it wasn't using the variable number as it was a constant variable to corrent it I declared it as a parameter
