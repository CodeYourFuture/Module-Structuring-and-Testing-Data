// Predict and explain first...

// Why will an error occur when this program runs?
// =============> decimalNumber is already the name of the function parameter. 
// You can't redeclare a variable with the same name in the same scope. and we do not even need to 
// define a new variable 

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(50));

// =============> i removed the variable 


// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}


console.log(convertToPercentage(50));