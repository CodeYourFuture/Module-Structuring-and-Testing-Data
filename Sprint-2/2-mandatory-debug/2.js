// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// - I think this will just keep returning the last digit of 103, no matter what number I pass in.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// - The last digit of 42 is 3
// - The last digit of 105 is 3
// - The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
//  1. How the function is defined matters:
//      The function getLastDigit() is defined without any
//      parameters—its parentheses are empty:
    function getLastDigit() { ... }
//   2. No parameters means no inputs:
//      Even though one call the function with values like
//      getLastDigit(42), getLastDigit(105), or getLastDigit(806), 
//      these values are ignored because the function 
//      definition does not accept any arguments.
//   3. Uses the global variable num:
//      Inside the function, it only looks at the global variable:
     const num = 103;
//      So, no matter what one passes in, the function always uses 103.
//   4. Returns last digit of num:
//      The function converts num (103) to a string
//      and takes the last character:
    num.toString().slice(-1)  // returns "3"
//   5. Therefore, the output is always "3":
//       When you run:
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//       It prints: The last digit of 42 is 3
//       Because the function ignores the 42 and returns the last digit of 103.
//      Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);  // '2'
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // '5'
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // '6'

// To make it work the function must be defined with a parameter (like num) inside the 
// parentheses so it can accept different numbers when called. This way, the 
// function works with any input number instead of always using a fixed global value.

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
