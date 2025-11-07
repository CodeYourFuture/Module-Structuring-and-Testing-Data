// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// The code will throw a "SyntaxError: Identifier 'decimalNumber' has already been declared"
// because the variable 'decimalNumber' is declared twice — once as a function parameter
// and again with `const decimalNumber` inside the function.
// Additionally, there will be a "ReferenceError: decimalNumber is not defined"
// when trying to log it outside the function, since 'decimalNumber' only exists inside the function scope.

// Try playing computer with the example to work out what is going on

/**
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/



// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// The code will throw a "SyntaxError: Identifier 'decimalNumber' has already been declared"
// because the variable 'decimalNumber' is declared twice — once as a function parameter
// and again with `const decimalNumber` inside the function.
// Additionally, there will be a "ReferenceError: decimalNumber is not defined"
// when trying to log it outside the function, since 'decimalNumber' only exists inside the function scope.

// Try playing computer with the example to work out what is going on

/** function convertToPercentage(decimalNumber) {
	  const decimalNumber = 0.5;
	  const percentage = `${decimalNumber * 100}%`;
	  return percentage;
    }

    console.log(decimalNumber);
*/

// =============> write your explanation here

// The first error happens because 'decimalNumber' is redeclared inside the function
// even though it’s already defined as a parameter. JavaScript does not allow
// redeclaring parameters with `let` or `const`.
// The second error happens because 'decimalNumber' is not defined in the global scope
// — it only exists inside the function, so `console.log(decimalNumber)` cannot find it.

// Finally, correct the code to fix the problem
// =============> write your new code here

/**
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"
*/

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"

