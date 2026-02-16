// Predict and explain first...

// Why will an error occur when this program runs?

// =============> write your prediction here
/**
 * Prediction:
 * An error will occur because the function parameter decimalNumber is being redeclared inside the function body using const. This creates a naming conflict - you can't have a parameter and a local variable with the same name.
 * Additionally, the console.log(decimalNumber) at the end will cause a ReferenceError because decimalNumber is not defined in the global scope - it's only defined within the function's scope.
 */

// Try playing computer with the example to work out what is going on

/**
 * Explanation
 * The code has two main problems:
 * Redeclaration error: The function parameter decimalNumber is being redeclared with const decimalNumber = 0.5 inside the function. In JavaScript, you cannot have a variable with the same name as a parameter in the same scope.
 * Scope error: The console.log(decimalNumber) at the end is trying to access a variable that only exists inside the function's scope. Variables declared inside functions are not accessible from the outside.
 * Logic error: Even if the scope issues were fixed, the function always returns "50%" regardless of the input because it overwrites the parameter with 0.5.
 */

/** Original function:
 *
 * function convertToPercentage(decimalNumber) {
 * const decimalNumber = 0.5;
 * const percentage = `${decimalNumber * 100}%`;
 *
 * return percentage;
 * }
 *
 * console.log(decimalNumber);
 */

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// Example usage:
const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber)); // Output: "50%"
console.log(convertToPercentage(0.80)); // Output: "80%"

