// Predict and explain first...

// Why will an error occur when this program runs?
// Answer: the error occurs because the variable decimalNumber is not declared globally.
// =============> write your prediction here
// Answer: the program throws an error, because the variable decimalNumber is not declared globally.
// Try playing computer with the example to work out what is going on

// const decimalNumber = 0.5;

// function convertToPercentage(decimalNumber) {
  
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(convertToPercentage(decimalNumber));

// =============> write your explanation here
// Answer: the value decimalNumber is already declare in the function scop. which is why it return an error message saying decimalNumber has been declared
// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5; // decimalNumber was declare in the global scope

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(decimalNumber)); 

