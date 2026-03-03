// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//the output will be: an error because the function getLastDigit is not defined to take any parameters, but we are trying to pass a number as an argument when we call the function. The error message will likely indicate that getLastDigit is not a function or that it cannot be called with arguments.
//const num = 103;

//function getLastDigit() {
  //return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
//it does run but returns the last digit of the number 103 for all three calls to getLastDigit, which is not the expected behavior. The output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The function getLastDigit Twill ignore the arguments passed in and always return the last digit of the global variable num, which is 103. The function should take a number as a parameter and return the last digit of that number.

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
