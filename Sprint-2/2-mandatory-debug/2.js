// Predict and explain first...

// Predict the output of the following code:
 /*The function getLastDigit() will always return the last digit of the number 103, not the number passed as an argument, 
  because the variable num is defined outside the function and not being passed in 
*/

 /*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

*/
// Now run the code and compare the output to your prediction
// was not correctly accepting parameters for different numbers passed into the function calls. It was using a fixed num = 103 value
// Explain why the output is the way it is
// The getLastDigit() function correctly converts the number to a string using toString()
//The slice(-1) method extracts the last character (digit) from the string representation of the number.
//Each consol.log prints the last digit of the number.
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);