// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Martin response - I predict the return value will be the last digit of num returned as a string

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// Martin response - the output is always 3.  The function does not take a parameter and the variable declared in the global scope, num, is called repeatedly inside the function.

// =============> write your explanation here
// Martin response - The function does not take a parameter, although the function calls include a parameter.  The variable in the global scope, num, is being called repeatedly within the function and this is why all function calls return the string value of 3

// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// Martin response - my explanation is above

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
