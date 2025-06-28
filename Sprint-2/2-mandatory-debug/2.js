// Predict and explain first...

// my prediction is that the output will be the last digit of the number 103, because the const num is declared at the top
// Predict the output of the following code:
// 3 should be the output
// =============> Write your prediction here

3
const num = 103;

function getLastDigit() {}
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// The const n= 103  declared first makes every other parameter under it invalid
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);}
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// variable (num) is defined in the function getLastDigit() 
function getLastDigit(num) {
  return num.toString().slice(-1);}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);