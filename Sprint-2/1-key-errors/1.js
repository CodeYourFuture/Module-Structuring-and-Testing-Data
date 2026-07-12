// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// There're two errors.
// First Error will be, the function having a parameter decimalNumber, and we are trying to declare another variable with same which we can't be able to do.
// And decimalNumber is a local variable , we cannot use it outside of the function/scope.


// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const decimalNumber= 0.9;
console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));
// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

// By function convertToPercentage(decimalNumber) -> we have created a function with the parameter decimalNumber.
// Inside the function, `decimalNumber` is already declared as a local variable because it is a parameter.
// We can't declare another variable with the same name using `const` in the same scope.
// we need to  assign a value to the variable.
// Outside of the function we are trying to print the value of decimalNumber but we haven't declare the variable nor assign a value.
// And decimalNumber is a new variable as its outside of the scope now, so if we want we can create a variable with the name used before in a function 
// because its in different scope.
// I have created a const variable and assigned a value to it.
// And lastly, I have called function and passed decimalNumber as an argument and print the value what's function is returning.
// The percentage is calculated by decimalNumber = 0.5 not 0.9 
// As we passed decimalNumber as an argument with the value of 0.9 but inside the function we are assigning a value to the
// decimalNumber so its value will be overwritten with parameter's local value and percentage will be calculated with decimalNumber=0.5
// If we don't assign a value inside the function then percentage will be calculated on the basis of the argument we passed,
// though outside of const decimalNumber will be unchanged and remained 0.9.