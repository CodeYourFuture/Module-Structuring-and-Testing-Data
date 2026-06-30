// Predict and explain first...

// Predict the output of the following code:
// this code might not run properly because the function getLastDigit is not set up to take any parameters,
//  but we are trying to pass in a number when we call it.

//const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// The output is the way it is because the function getLastDigit does not take any parameters, 
// but we are trying to pass in a number when we call it. Instead, the function is using the variable num which is set to 103. 
// Therefore, regardless of what number we pass in, the function will always return the last digit of 103, which is 3.

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
// The function getLastDigit is not working properly because it does not take any parameters,
// to fix the problem, we need to add a parameter to the function definition so that it can accept a number when called.