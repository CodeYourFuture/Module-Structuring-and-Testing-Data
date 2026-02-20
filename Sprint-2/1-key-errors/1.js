// Predict and explain first...

// Why will an error occur when this program runs?

// I predict that the error is occurring because there is a variable name conflict. 
// The parameter 'decimalNumber' is being redeclared inside the function, which is not allowed in JavaScript. 
// This will cause a syntax error because we cannot declare a variable with the same name as a parameter within the same scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5; 
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// decimalNumber is a parameter of the function convertToPercentage. 
// Inside the function, we are trying to declare a new variable with the same 
// name 'decimalNumber' using the 'const' keyword. 
// This creates a conflict because we cannot have two variables with the same name in the same scope. 
// To fix this error, we can simply remove the 'const' keyword and assign the 
// new value to the existing parameter 'decimalNumber' instead of trying to redeclare it.

// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));