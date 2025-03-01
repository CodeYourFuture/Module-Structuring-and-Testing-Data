// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here 
// console.log(`The last digit of 42 is ${getLastDigit(42)}`); 104
// console.log(`The last digit of 105 is ${getLastDigit(105)}`); 1010
// console.log(`The last digit of 806 is ${getLastDigit(806)}`); 1080

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here  line 9 use const, not let
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//here have two problem 
// line 9 used const the the value will unchanged
// num is not defined, add num in function brackets
