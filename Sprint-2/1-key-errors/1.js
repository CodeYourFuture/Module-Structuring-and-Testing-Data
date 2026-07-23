// Predict and explain first...

// Why will an error occur when this program runs?

// The error happens because decimalNumber is declared twice.


// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

//// The error happens because decimalNumber is already a parameter,
// so it cannot be declared again using const.
// Also, decimalNumber is inside the function, so it can't be
// used outside the function with console.log().

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
