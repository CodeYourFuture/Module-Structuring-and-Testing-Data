// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// [ChunYanWong] No parameter included in the function and hence the same output

// Now run the code and compare the output to your prediction
// =============> write the output here

// [ChunYanWong] 
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

// [ChunYanWong] No parameter included in the function

// Finally, correct the code to fix the problem
// =============> write your new code here
// [ChunYanWong] function getLastDigit(num) {
//  ...

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// [ChunYanWong] for the case 12.34, it will return 4 instead of the digit 2
// [ChunYanWong] function getLastDigit(num) {
//       return Math.abs(Math.trunc(num)) % 10;
//     }

