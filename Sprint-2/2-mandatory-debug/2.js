// Predict and explain first...
/*
The function 'getLastDigit' is not working properly because it does not take any parameters, yet it is being called with arguments (42, 105, 806).
As a result, it always returns the last digit of the constant 'num', which is 103, instead of the last digit of the numbers passed to it.
*/
//  =============> write your prediction here

/*
 The output will be:
 The last digit of 42 is 3
 The last digit of 105 is 3
 The last digit of 806 is 3
*/
// Predict the output of the following code:
// =============> Write your prediction here
/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/
// Now run the code and compare the output to your prediction
// =============> write the output here
/*
The output is:
 The last digit of 42 is 3
 The last digit of 105 is 3
 The last digit of 806 is 3
 */
// Explain why the output is the way it is
/*  1. The function 'getLastDigit' does not accept any parameters, so it does not use the values (42, 105, 806) passed to it when called.
    2. Instead, it always operates on the constant 'num', which is set to 103.
    3. The function converts 'num' to a string and retrieves the last character using 'slice(-1)', which is '3'.
    4. Therefore, regardless of the input values, the function always returns '3', leading to the same output for all calls.
*/
// =============> write your explanation here
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
