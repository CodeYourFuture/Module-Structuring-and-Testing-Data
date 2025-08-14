// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// there will two errors :
// 1. in line 10 because we want to declare it and it is already declared
// 2. in line 18 we want to call the function but we called the variable which is in the function so there will be an error says variable is not defined d

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// This code is to convert a float to a percentage by multiplying the float by 100

// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));
