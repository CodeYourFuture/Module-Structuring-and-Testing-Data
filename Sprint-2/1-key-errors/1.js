// Predict and explain first...

// Why will an error occur when this program runs?
// =============> An error will occur because the variable `decimalNumber` is being declared twice. Once as a function parameter and again using `const` inside the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> The error happens because the function `convertToPercentage` has a parameter named `decimalNumber`, and then inside the function body, it tries to declare a new constant also named `decimalNumber`. In JavaScript, you cannot declare a new variable with the same name as a parameter using `const`, `let` or `var`, because it causes a naming conflict. This results in a SyntaxError: "Identifier 'decimalNumber' has already been declared".

// Finally, correct the code to fix the problem
// =============>
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
