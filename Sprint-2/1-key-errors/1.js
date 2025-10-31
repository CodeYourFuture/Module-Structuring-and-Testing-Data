// Predict and explain first...

// Why will an error occur when this program runs?
// =============> I believe that the function convertToPercentage is not mentioned in the console.log statement.
// Declaring the const decimalNumber is unnecessary as it is already declared as a parameter within the function convertToPercentage.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  // const percentage = `${decimalNumber * 100}%`;

  // return percentage;
//}

// console.log(decimalNumber);

// =============> A syntaxError occurred saying decimalNumber is already declared.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());

// the new code runs without error and outputs "50%"
