// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// we are using the constant variable num, and it is declared as a global variable. The function is declared with no
// parameter, but, while calling a function we're passing an argument. It can't use that argument as function is declare
// with no parameter so it will use the global variable whenever the function is being called.
/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
// =============> write the output here
// it's returning 3 for all three digits which is wrong for that digits
// Explain why the output is the way it is
// =============> write your explanation here
//This is happening because function is declare with no parameters as I predict and my prediction is totally right as javaScript
//doesn't allow to use argument when there's no parameters.
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
// it wasn't working because we are passing argument without declaring function with a parameter and function was using
//global variable whenever the function is being called, so it was returning the last digit of that value stored in global variable.