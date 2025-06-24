// Predict and explain first.:- SyntaxError because the variable 'decimalNumber' is being declared twice
// Why will an error occur when this program runs?
  
      // The first decimalNumber is a function parameter and the second decimalNumber is declared using const inside the function body.
     //JavaScript does not allow a const or let declaration to reuse the name of a parameter in the same scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber= 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
  /*The error happens because the variable name 'decimalNumber' is being used twice in the same function scope: 
  once as a parameter, and once as a const variable. 
  note:- JavaScript does not allow redeclaring a parameter name using const or let. 
  To fix the error, so, we should either rename the internal variable, or just use the parameter directly.*/

// Finally, correct the code to fix the problem
 

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); 

