// If products or services are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on


function calculateWithVAT(baseWithoutVAT) {
  /*
  instead you could just write 100, this is for the future, 
  if you have to write a function with a dynamic value 
  of decimal places

  I did this because before that I was taught to round 
  all taxes in favor of the tax authority. For example, 
  mathematical rounding of the number 43.212 = 43.21, 
  but if we need to get the amount with tax, 
  then 43.212 = 43.22, one cent in this case goes in favor 
  of the tax authority. If in the UK it "works" differently, 
  then the function must be rewritten according 
  to the rules of mathematics
  */

  const factor = Math.pow(10, 2); 
  return Math.ceil(Number((baseWithoutVAT * 1.2).toFixed(3)) * factor) / factor;
}


let currentTestOutput = 0;
let targetTestOutput = 0;

currentTestOutput = calculateWithVAT(50);
targetTestOutput = 60;
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

currentTestOutput = calculateWithVAT(33.33);
targetTestOutput = 40;
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);

currentTestOutput = calculateWithVAT(51.01);
targetTestOutput = 61.22;
console.assert(
  currentTestOutput === targetTestOutput,
  `current output: ${currentTestOutput}, target output: ${targetTestOutput}`
);
