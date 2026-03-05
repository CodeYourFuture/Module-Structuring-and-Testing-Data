// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// An error will occur because the variable decimalNumber is being declared as both 
// a parameter and as a local variable inside the function. This will cause a 
// syntax error. Additionally, the variable decimalNumber is not defined 
// outside the function, so it will throw a ReferenceError when trying to log it 
// to the console.
// The percentage sign is not seen as a text character but instead as code for 
// the function to calculate the remainder after a division operation: the modulo. 
// It will therefore not return a percentage as desired


// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The first error is that the variable decimalNumber is being declared twice, 
// first as a parameter and then as a local variable inside the function. This 
// will cause a syntax error. 
// The second error is that the variable decimalNumber is not defined outside the 
// function. It will not log to the console but throw a ReferenceError because it 
// is not accessible in that scope.

// Also, on testing the code I saw that I had misjudged the modulo issue - it is not 
// an issue at all because the percentage sign is being used as a text character in a 
// template literal, so it will be treated as such and not as code for the modulo operator.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));