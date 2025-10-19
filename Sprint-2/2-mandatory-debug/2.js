// Predict and explain first...

// Predict the output of the following code:
// =============> first it will convert the number to string then it will slice the last character that function
//then will print 
//The last digit of 42 os 2
//The last digit of 105 os 5
//The last digit of 806 os 6

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// =============> Because the function always takes the global variable witch is 103
//the output will be the same witch 3.
// Finally, correct the code to fix the problem
// =============> write your new code her


function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
