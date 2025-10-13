// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//decimalNumber does not exist outside the scope of the convertToPercentage funtion so the log will throw an error saying it has not been declared.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// =============> write your explanation here
//decimalNumber is passed as a parameter when the function is called, line 10 tries to declare it again and assign it a new fixed value. we would need to remove that line so we can use the value passed in with the function call.
//decimalNumber only exists inside the function scope so console.log cannot access it an error will be thrown. we need to instead pass the function to console.log.
// Finally, correct the code to fix the problem
// =============> write your new code here
