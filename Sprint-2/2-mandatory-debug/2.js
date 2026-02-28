// Predict and explain first...

// Predict the output of the following code:
// ===========> Write your prediction here
// Prediction: The output will incorrectly say the last digit is "3" for all numbers, because the function uses the global variable 'num' (103) instead of accepting a parameter.

// We added 'num' as a parameter inside the parentheses
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// ===========> write the output here
// Output after the fix: 2, 5, 6. (Before the fix it was 3, 3, 3).

// Explain why the output is the way it is
// ===========> write your explanation here
// Explanation: The original function had no parameters, so it used the global variable 'num = 103'. By adding 'num' as a parameter, the function now correctly uses the value passed into it when called.

// Finally, correct the code to fix the problem
// ===========> write your new code here
// The fixed code is written above.
