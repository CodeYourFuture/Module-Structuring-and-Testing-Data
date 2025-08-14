// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// There will be an error because the variable decimalNumber is declared two times.
// Also, decimalNumber is used outside the function in console.log, but it doesn't exist there.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The function already has called decimalNumber in line 10.
// But inside the function in line 11, it tries to create a new variable with the same name.
// Another error happens in line 17 because decimalNumber only exists inside the function, but is used outside.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
