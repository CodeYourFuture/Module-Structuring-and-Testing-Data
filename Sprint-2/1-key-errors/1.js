// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
  //  // The function was called incorrectly.
// Try playing computer with the example to work out what is going on
  // It shows as the error from (const decimalNumber).
// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
  // The will create var we it is wrong to use same var name and thats will let the function read it fine. Also, the way called the function it is wrong.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const decimalNumber1 = 0.5;
  const percentage = `${decimalNumber1 * 100}%`;

  return percentage;
}

console.log(convertToPercentage());
