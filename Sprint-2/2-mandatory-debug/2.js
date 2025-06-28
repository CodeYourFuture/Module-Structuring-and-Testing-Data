// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The last digit of 42 is undefined
// The last digit of 105 is undefined
// The last digit of 806 is undefined


// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is undefined
// The last digit of 105 is undefined
// The last digit of 806 is undefined
// Explain why the output is the way it is
// =============> write your explanation here
// The output is undefined because the getLastDigit function does not accept any parameters.
// It always uses the global variable num, which is set to 103.
// The function getLastDigit should take a number as an argument and return its last digit.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}


// This program should tell the user the last digit of each number.
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Explain why getLastDigit is not working properly - correct the problem
// =============> write your explanation here
// The getLastDigit function was not accepting any parameters.


