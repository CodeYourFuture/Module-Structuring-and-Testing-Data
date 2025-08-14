// Predict and explain first...





// Why will an error occur when this program runs?
// 
// -
// =============> write your prediction here
// - Goal: This function is meant to take a decimal (like 0.5)
// -  and return it as a percentage (like "50%").
// expected use:
convertToPercentage(0.5);
// - should return "50"
// - What we expect:
// - Input: 0.5
// - Multiply by 100: 0.5 * 100 = 50
// - Convert to string with %: "50%"
// - Return "50%"



// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

Play computer:
function convertToPercentage(decimalNumber){
  const decimalNumber = 0.5; // Error! 'decimalNumber' already declared
   const percentage = `${decimalNumber * 100}%`;
   return percentage;

}
// - The moment the engine sees const decimalNumber = 0.5;, it throws an error
// - because decimalNumber was already defined as a parameter.
// - So, the function never runs past that point.

// =============> write your explanation here
// - - SyntaxError: Identifier 'decimalNumber' has already been declared
// - This is because of this...
// - The variable decimalNumber is declared twice:
// - First, as a parameter in the function declaration:
// - function convertToPercentage(decimalNumber)
// - Then again, inside the function body:
// - const decimalNumber = 0.5;
// - JavaScript does not allow a const to be re-declared using
// - the same name as a parameter within the same function scope. This results in a syntax error.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
