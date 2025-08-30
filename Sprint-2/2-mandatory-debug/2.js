// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// We will have the number 3 in any case 
// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The function didn't have a parameter so  we it is called it gives the same value, by adding a parameter so each time it is called it gives a value
// Finally, correct the code to fix the problem
// =============> write your new code here



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// the function has just one  value which is 103 
// Explain why getLastDigit is not working properly - correct the problem
function getLastDigit(num) {
  return num.toString().slice(-1);
}