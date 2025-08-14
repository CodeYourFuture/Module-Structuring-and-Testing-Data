// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here


// The code gives an error because decimalNumber is declared twice, as a parameter and with const.



// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

/* 

The function redeclares decimalNumber with const, which isn't accepted in Javascript, and console.log(decimalNumber) causes an error since decimalNumber is only defined in the function

*/


// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));