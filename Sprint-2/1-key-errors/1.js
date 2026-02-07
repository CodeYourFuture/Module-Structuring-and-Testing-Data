//  =============> Prediction <=============
// The script won't run because the decimalNumber variable is being declared
// twice (first in the convertToPercentage input, and again inside the function)

//  =============> Actual Results <=============
// The script threw a syntax error due to the double variable declaration

//  =============> Corrected Script <=============
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.assert(
  convertToPercentage(0.45) === "45%",
  `current output: ${convertToPercentage(0.45)}, expected output: 45%`
);
