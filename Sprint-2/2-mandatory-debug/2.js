// Predict and explain first...

// Predict the output of the following code:
// =============> The output will be:
// 1. The last digit of 42 is 3
// 2. The last digit of 105 is 3
// 3. The last digit of 806 is 3
// Why? Because we don't pass any parameter to the function ant it always uses the variable "num", which defined in the global scope, so function has access to it and the last digit of 103 is 3.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3
//                The last digit of 105 is 3
//                The last digit of 806 is 3
// Explain why the output is the way it is
// =============> Because we use the global variable "num" in the function instead of passing the parameter to the function.
// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
//
// This program should tell the user the last digit of each number.
//
// Now output looks correctly:
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6
//
// Explain why getLastDigit is not working properly - correct the problem
// Actually, maybe its not the good idea to use the same name "num" for different variables in different scopes, because it can be confusing. It works correctly but next time I'll use for the global scope some more meaningful name.
