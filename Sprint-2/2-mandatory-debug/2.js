// Predict and explain first...

// Predict the output of the following code:
// =============> We will get an error since num is declared as a global variable

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> the code worked 
// the function is only working using one variable 
// =============> this function is not taking any arguments
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
