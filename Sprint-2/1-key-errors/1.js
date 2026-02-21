// Predict and explain first...

// Why will an error occur when this program runs?
// =============> It will likely be a reference error because the variable decimalNumber is not defined in the global scope
//                and is only declared within the function convertToPercentage. When we try to log decimalNumber outside of the function,
//                it will not be accessible and will throw an error indicating that decimalNumber is not defined.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//const decimalNumber = 0.5;
//const percentage = `${decimalNumber * 100}%`;

//return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(a) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.5));
