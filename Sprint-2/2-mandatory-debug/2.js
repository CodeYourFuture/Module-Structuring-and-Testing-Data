// Predict and explain first..

// Predict the output of the following code:
// =============> Write your prediction here

// I think that the code might not bring an error but it will not produce the desired results.

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
// =============> write the output here

// The code did not produce desired results.

// Explain why the output is the way it is
// =============> write your explanation here

/*The code did not produce the desired results because, num was declared as a constant and constant variables cannot be reassigned.
The function had no set parameters, the parameters were taken from the constant declared variable. */

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

//This program should tell the user the last digit of each number.
//Explain why getLastDigit is not working properly - correct the problem
