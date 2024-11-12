// Predict and explain first...
// 〰️ The program isn’t behaving as intended because the multiply function does not return a value; it only logs the result to the console. 
// 〰️ When multiply(10, 32) is called within the template literal (${multiply(10, 32)}), it executes the multiply function with a = 10 and b = 32.
// 〰️ Inside multiply, the expression a * b (i.e., 10 * 32 = 320) is calculated and logged to the console by console.log(a * b).
// 〰️ However, since multiply lacks a return statement, it returns undefined by default.
// 〰️ As a result, the template literal "The result of multiplying 10 and 32 is ${multiply(10, 32)}" actually evaluates to "The result of multiplying 10 and 32 is undefined".
// 〰️ To fix this, you need to add a return statement in the multiply function so that it returns the product of a and b:

function multiply(a, b) {
  return a * b;             // Return the product instead of just logging it
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
