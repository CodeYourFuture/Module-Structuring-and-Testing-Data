// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/*
Yes an error will occur.
decimalNumber has been declared
an error will another errour would be for, decimalNumber is not defined
*/
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
/*
decimalNumber has been called and set as a const.
"console.log(decimalNumber)" wont work as decimalNumber only excistes inside the function not outside it.
*/
// Finally, correct the code to fix the problem
// =============> write your new code here
/*
function convertToPercentage(decimalNumber) {
  const decimal = 0.5;
  const percentage = `${decimal * 100}%`;

  return percentage;

}
  console.log(convertToPercentage)
*/
