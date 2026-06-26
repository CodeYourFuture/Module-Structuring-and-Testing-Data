// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here. /* Error will occur when this program is run because a variable already declared inside the function parameter , was redeclared inside the function body. Also the console.log function is calling the variable decimalNumber which is not defined in the global scope. */

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
   decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// =============> write your explanation /* the first error SyntaxError pointed at line 9 as to where the error occurred  and explained that the identifier-decimalNumber has already been declared. The second error ReferenceError pointed at line 15 as to where the error occurred and explained that the identifier-decimalNumber is not defined in the global scope. */
/* /home/tobi/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/1.js:9
  const decimalNumber = 0.5;
        ^

SyntaxError: Identifier 'decimalNumber' has already been declared*/
/* /home/tobi/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/1.js:15
console.log(decimalNumber);
            ^

ReferenceError: decimalNumber is not defined*/

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  // removed the variable reassignment so that function call will work with any argument passed to it.
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.75));
