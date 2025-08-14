// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here==> Within the function, the variable decimalNumber is given a constant value of 0.5
// this means that the answer will always be 0.5 regardless of the actual decimal number put into the function.

// Try playing computer with the example to work out what is going on

/* function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// =============> write your explanation here==>running the code produced a SyntaxError that decimalNumber
// has already been declared. 

// Finally, correct the code to fix the problem
// =============> write your new code here ==> I would solve the code by declaring decimalNumber before t
// the function then simply taking ln10 off so have to redeclare it and so that we don't always end up with 50%.
let decimalNumber;
function convertToPercentage(decimalNumber) {
    const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.23457));

