// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = decimalNumber * 100;
  return `${percentage}%`;
}

console.log(convertToPercentage(0.5));

// =============> write your explanation here
//predict://This code is designed to take a decimal number, convert it to a percentage,
//and return it as a formatted string with a % sign. However, an error in the code will prevent it from working correctly.
//The main issue seems to be with the reassignment of the constant variable decimal number and the unnecessary use of template literals for the percentage variable.

//explain://Constant Reassignment: The variable decimalNumber is defined as a const in the function parameters, but it is reassigned to 0.5 inside the function. In JavaScript, const variables cannot be reassigned,
//so this will result in an error.
//Template Literal Issue: In percentage, the template literal ${decimalNumber * 100}% is used. While this works syntactically, if percentage is intended to be a number, then the template literal is unnecessary and may cause issues if the output is expected to be a numeric value.

//Fix"//Remove the reassignment of decimalNumber or change it to a variable that can be reassigned (let or var) if you need to modify it.
//If percentage is meant to be a numeric value, remove the template literal and the % symbol, or convert it to a string with the % if the formatted output is desired

// Finally, correct the code to fix the problem
// =============> write your new code here
