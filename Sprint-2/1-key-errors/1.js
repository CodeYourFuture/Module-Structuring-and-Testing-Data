// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on


// =============> write your explanation here
// The function already has decimalNumber as a parameter.
// Inside the function, you wrote const decimalNumber = 0.5;, which tries to declare it again, this causes an error.
// Also, console.log(decimalNumber); is outside the function, so decimalNumber is not defined there, causing another error.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"
