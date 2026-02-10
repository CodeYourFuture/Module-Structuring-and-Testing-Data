// Predict and explain first...

// Why will an error occur when this program runs?
// decimalNumber was already declared on the line 8. it leads to an error declaring it the second time on the line 9. 
// line 15 is in global scope and tries output value of the local variable from inside of the function. 
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// i will declare the decimalNumber variable before the function and call the function. i would also removed the percentage variable because it doesn't make anything useful in this piece of code. 

// Finally, correct the code to fix the problem
const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(decimalNumber))

