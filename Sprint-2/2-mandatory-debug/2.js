// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// It will always print "3" for every log. The function ignores the numbers we pass in and blindly uses the global 'num' (103).
/* Commented out the broken code:
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/
// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The function lacks a parameter in its definition. Therefore, it ignores the arguments (42, 105, 806) and always falls back to the globally defined 'num' which is 103.
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(number) {
  return number.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
