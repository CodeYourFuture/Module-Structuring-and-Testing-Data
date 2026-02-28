// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// II predict that the output will be "The last digit of 42 is 3", "The last digit of 105 is 3", 
// and "The last digit of 806 is 3" because the function getLastDigit is using the variable num
//  which is assigned the value of 103 using const in global scope, 
// so it will always return the last digit of 103 which is 3.

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
// it's similar to what I predicted.

// Explain why the output is the way it is
// =============> write your explanation here
// The output is the way it is because the function getLastDigit is using the variable num which is assigned 
// the value of 103 using const in global scope, and the function definition didn't have an argument to receive the number.

// Finally, correct the code to fix the problem
// =============> write your new code here


function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

