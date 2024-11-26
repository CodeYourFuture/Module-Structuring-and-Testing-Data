// Function to convert a decimal number to a percentage
function convertToPercentage(decimalNumber) {
  // The decimalNumber parameter is used directly without redeclaring it
  const percentage = `${decimalNumber * 100}%`;  // Multiply the decimal by 100 and append '%' to get the percentage
  return percentage;  // Return the result as a string (e.g., "50%")
}

// Call the function with a decimal number and log the result
console.log(convertToPercentage(0.5));  // Expected output: "50%"

// Explanation:
// The original code had the following issues:
// 1. **Redeclaring the parameter `decimalNumber` inside the function**:
//    - In the original function, there was a line: `const decimalNumber = 0.5;`
//    - This caused a syntax error because you cannot redeclare a parameter using `const` or `let` inside the same scope.
//    - To fix this, we simply removed the redeclaration and used the parameter `decimalNumber` directly inside the function.
//
// 2. **Logging `decimalNumber` outside the function**:
//    - The original code had `console.log(decimalNumber);` after the function definition.
//    - However, `decimalNumber` is only available inside the `convertToPercentage` function (it's a local parameter), not in the global scope.
//    - This caused a `ReferenceError` when trying to access `decimalNumber` outside the function.
//    - Instead of logging `decimalNumber`, we should call the function and log the result of the function call, as we did in `console.log(convertToPercentage(0.5));`.
