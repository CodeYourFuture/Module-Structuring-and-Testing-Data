// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// When the JS executed the code, it will give 2 possible error 1 is decimalNumber is define inside the function and decimalNumber is undefined when using console.log

// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/
// =============> write your explanation here

/*
For function convertToPercentage there are 1 error:
  inside the function the decimalNumber parameter is being re-declare and given a fix value, this will give this function a 
  decimalNumber are ready defined.

Next is when we console.log the function instead of calling the function name and value we used the function parameter variable name
instead. This will give the error decimalNumber is undefined.
*/

// Finally, correct the code to fix the problem
// =============> write your new code here


function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.25));