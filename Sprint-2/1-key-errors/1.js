// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here: const decimalNumber = 0.5; this line should be declare outside of function

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
 // const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here: In line 9 const decimalNumber = 0.5; should not be in their because it will redeclare in side function which will be error, it will be local scope if its inside a function. declaring outside of code make global scope, can call through out the code.

// Finally, correct the code to fix the problem
// =============> write your new code here
const decimalNumber = 0.5;
function convertToPercentage(decimalNumber){
  const percentage = `${decimalNumber*100}%`;
  return percentage;

}
console.log(decimalNumber);
