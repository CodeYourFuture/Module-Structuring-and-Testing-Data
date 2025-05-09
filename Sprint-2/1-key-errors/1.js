// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// code wont run since the parameter will not take any other value, it was declared already as 0.5 so we need to remove "const decimalNumber = 0.5;" from our code 
// Try playing computer with the example to work out what is going on

// =============> write your explanation here
// our parameter has been overwritten so it will always take the same value and nothing else and the variable has been declare outside its scope since it can only be accessed inside the function
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(2));