// Predict and explain first... - const num = 103; is declared outside the function, so it will not be used in the getLastDigit function.

// Predict the output of the following code: - error.
// =============> Write your prediction here

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here -
// The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here - because const cant be used with other numbers, it is only used with the first number declared. and the function is not taking any parameters, so it will always return the last digit of the first number declared.
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// our function getLastDigit does not accept any parameters, so it always uses the global variable num (which is 103).
const num = 103;

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
