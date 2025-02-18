// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;
  
  return percentage;
}

<<<<<<< HEAD:Sprint-2/errors/1.js
console.log(convertToPercentage(0.5)); 


//It must be stopped at line 7
//SyntaxError: Identifier 'decimalNumber' has already been declared
//The parameter decimalNumber is declared, using in the const again is impossible.
//console.log does not recall the function it just prints decimalNumber
=======
console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
>>>>>>> main:Sprint-2/1-key-errors/1.js
