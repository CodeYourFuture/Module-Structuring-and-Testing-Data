// Predict and explain first...

// Predict the output of the following code:
// =============> the function is using num = 103 for its calculation hence the output will always be 3
// despite what input we use. the function does not take any arguments so that could lead to an error as well

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> the last digit of any number is 3 and this is matching with my prediction
// Explain why the output is the way it is
// =============> the function is using the value num = 103 for all its computations
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
// the function is using the value num = 103 for all its computations thats why the output is always 3
