// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I suppose the error could be:
// 1. The variable "decimalNumber" declared twice in the same scope (in the function's parameter and in the function's body)
// 2. We can't reassign a value if we use word "const" to declare a variaable
// 3. The variable "decimalNumber" isn't defined in the global scope, so when we try to use function console.log(decimalNumber) it will throw a ReferenceError. If we want to log the result of the function we have to call this function with some argument: console.log(convertToPercentage(0.5))

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
//So, when I run the code, I got "SyntaxError: Identifier 'decimalNumber' has already been declared" and that the same as my prediction above. I didn't think that actually we don't need to declare "decimalNumber" again inside the function, and I removed line  "const decimalNumber = 0.5; to fix the problem. THen, I called the function with the argument 0.5 in console.log and this worked fine.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5));
