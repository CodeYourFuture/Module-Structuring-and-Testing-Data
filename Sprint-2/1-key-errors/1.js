// Predict and explain first...


// Why will an error occur when this program runs?
// I predict this code will cause a SyntaxError because of constant redeclaration, and even if that were fixed, it would cause a ReferenceError when trying to access decimalNumber outside the function

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// My explanation; There are two main problems:
// SyntaxError: The parameter decimalNumber and the constant const decimalNumber = 0.5; have the same name in the same scope, causing a redeclaration error.
// ReferenceError: Even if we fix the first issue, console.log(decimalNumber) tries to access a variable that only exists inside the function scope, not in the global scope.



// Finally, correct the code to fix the problem
// =============> write your new code here

// My code:

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

// I removed the redundant redeclaration of decimalNumber inside the function
// I Changed console.log(decimalNumber) to actually call the function with convertToPercentage(0.5)