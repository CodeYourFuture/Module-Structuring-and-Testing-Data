// Predict and explain first...
// error on line 11
// error on line 17
// Why will an error occur when this program runs? yes
// =============> write your prediction here
// decimalNumber is declared before and can not be declared again.
// console.log(decimalNumber) should be console.log(convertToPercentage)
// Try playing computer with the example to work ot what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

//console.log(percentage);

// =============> write your explanation here
// decimalNumber is declared before and can not be declared again.
// console.log(decimalNumber) should be console.log(convertToPercentage)

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
