// Predict and explain first...

// Why will an error occur when this program runs?

// SyntaxError: Identifier 'decimalNumber' has already been declared
// ReferenceError: decimalNumber is not defined

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

/* The error happens because we are trying to use console.log(decimalNumber) outside the function, 
but decimalNumber is not defined in the global scope — it only exists inside the function.
Also, inside the function, we are using const decimalNumber = 0.5;, which tries to redeclare the function parameter.
That’s also not allowed — i can’t have both */
// this is almost the same with the first exercise i did(js 0.js)

// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"
