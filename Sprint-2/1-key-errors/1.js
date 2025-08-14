// Predict and explain first...

// Why will an error occur when this program runs?
// =============> 💡Answer: Same issue as in the firts one, you're redeclaring a parameter. What we can do is to assign the same parameter with new value.

// Try playing computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> it is giving me a "SyntaxError: Identifier 'decimalNumber' has already been declared" error. This is because I am trying to declare the variable 'decimalNumber' again inside the function, but it has already been declared as a parameter. In JavaScript, you cannot declare a variable with the same name in the same scope.
// To fix this, I need to remove the 'const' keyword from the second declaration.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"
