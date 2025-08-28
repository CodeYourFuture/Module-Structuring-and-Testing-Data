// Predict and explain first...

// Predict the output of the following code:
// we should get 3 
// =============> Write your prediction here

// const num = 103; 

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
//Because the variable num is already declared and has a value of 103 and the function getLastDigit is not taking any arguments, so the function is not using the num variable. The function is returning the last digit of the number that is passed as an argument. The function is not taking any arguments, so it is returning the last digit of the number 103, which is 3.

// =============> write your explanation here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

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