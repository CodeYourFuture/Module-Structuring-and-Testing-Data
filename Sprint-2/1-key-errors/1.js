// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/*const decimal no is local variable ,we can not use out side of function scope. 
*/
// Try playing computer with the example to work out what is going on
/* SyntaxError: Identifier 'decimalNumber' has already been declared */

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
/* 1.  The original code had a SyntaxError because
 the decimalNumber variable was declared twice within the convertToPercentage 
 function using const. a variable can only
be declared once within a given scope using const or let.


  2. cope Issue: The console.log(decimalNumber) statement outside the 
  function caused a ReferenceError. The decimalNumber variable declared 
  inside the function is local to that function's scope.
   */

  // Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}


const decimalValue = 0.6;
const percentageString = convertToPercentage(decimalValue);
console.log(percentageString);