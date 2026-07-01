// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// My prediction is that the variable `decimalNumber` is already declared and also the console.log can only log the variable decimalNumber.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here: the variable was already declared in the parameter scope and it won't redeclare inside the function again
//                                              and also the console.log was only working for the logging of the variable `decimalNumber` not the function.

// Finally, correct the code to fix the problem
// =============> write your new code here: const decimalNumber = 0.5;
//                                       function convertToPercentage(decimalNumber) {
//                                           const percentage = `${decimalNumber * 100}%`;

//                                                        return percentage;
//                                                       }

//                                           console.log(convertToPercentage(decimalNumber));
