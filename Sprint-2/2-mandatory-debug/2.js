// Predict and explain first...

// Predict the output of the following code:
// =============> The code will first return 3 as string and after calling the function getLastDigit,
                 // it will not return anything because every number pased will be changed to string. 

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3 three times.. 
// // =============> my prediction was somehow closer but not exact, the case is parameter num needs to be with the getLastDifit
// function instead of const num = 103. 
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

//the case is parameter num needs to be with the getLastDigit function instead of const num = 103. 
