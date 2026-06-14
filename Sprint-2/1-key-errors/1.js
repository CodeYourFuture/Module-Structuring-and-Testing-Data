// Predict and explain first...

// Why will an error occur when this program runs?
// =============> just like in the previous exercise, you can't have two variables 
//with the same name in one scope. Second error is you can't call on "decimalNumber"
//from outside the function. Since that variable only lives inside the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
//a parameter (decimalNumber) is created
  const decimalNumber = 0.5;
//this is where the first error appears, as now there are two clashing variables 
//under the same name. Code stops working.  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> my prediction was correct. 

// Finally, correct the code to fix the problem
// =============> 

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

//removed the clashing variable and placed the function call inside the 
//console log.








