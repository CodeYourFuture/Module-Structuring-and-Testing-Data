// Predict and explain first...

// Predict the output of the following code:
// =============> the function is going to return error as the /1 is not valid expression or syntax

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
console.log(`The last digit of 7247 is ${getLastDigit(7274)}`);

// Now run the code and compare the output to your prediction
/* ===========> function getLastDigit() {
return num.toString().slice(-1);
  */
// Explain why the output is the way it is
// =============> this is because the /1 is not defined and not valid in the system of javaScript languague, so it throws an error. Morever because the parameter for the function is not defined, the function takes the global variable scope to run the code inside it. So obviously, we need to put down a parameter which is num to have the function work for any number other than the global variable scope.
// Finally, correct the code to fix the problem
/* ============> function getLastDigit(num) {
return num.toString().slice(-1);
}
*/

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
