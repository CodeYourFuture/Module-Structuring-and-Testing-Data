// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict that because the num variable has been given a constant value, the program will give undefiened when the getLastDigt function called after.


const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
// Explain why the output is the way it is
the output give 3 which is the last digit for the constant value declared to the num 
because the function getLastDigit doesn't have the num as a paramater to accept it when we call it with the console.log function.
// Finally, correct the code to fix the problem

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// because it hasn't been gevine a paramater when it declared but when the num added as a paramater the program give the xpeacted outputs.