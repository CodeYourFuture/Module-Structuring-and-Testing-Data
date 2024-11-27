
// // Predict and explain first...

// // Why will an error occur when this program runs?
// // Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) { // const decimalNumber is declared inside a function, whereas it should be outside of the function and the variable name should be different, otherwise it will give an error, or use the let declaration
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);// here the definition name should be different suchas convertToPercentage

function convertToPercentage(decimalNumber) { 
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const example = 0.5;
console.log(convertToPercentage(example));
console.log(convertToPercentage(0.23));
