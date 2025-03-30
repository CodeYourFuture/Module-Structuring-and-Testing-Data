// Predict and explain first - 4,2 , 10,5 , 80,6

// Predict the output of the following code:
// =============> Write your prediction here - if slice -1 from the number, then 42 slice will be 4,2

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction 
// - 3 - slice (-1) takes from const number and not from getLastDigit
// Explain why the output is the way it is - in the code don't getLastDigit parameter
// in the code don't getLastDigit parameter
// Finally, correct the code to fix the problem
// =============> write your new code here



function getLastDigit(num2) {
  return num2.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
