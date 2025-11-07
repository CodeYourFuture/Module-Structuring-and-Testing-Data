// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
//
// This happens because the function `getLastDigit` doesn’t use the argument passed to it. 
// Instead, it always refers to the constant `num = 103`, 
// so every time you call it, it converts 103 to a string and returns the last digit ("3").

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The function `getLastDigit` ignores the argument being passed (like 42, 105, or 806) 
// because it doesn’t have a parameter defined. 
// Instead, it always uses the globally defined constant `num` (which is 103). 
// Therefore, the function always returns the last digit of 103, which is "3".

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
// The function was not working because it didn’t accept any parameters and 
// was instead using the fixed global variable `num`. 
// By adding a parameter to the function and using that instead, 
// it now correctly calculates the last digit for any input number.

