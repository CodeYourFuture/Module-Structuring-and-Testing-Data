// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// There're two errors.
//The first error occurs because the function has a parameter called decimalNumber, and we are trying to declare another variable with the same name using const. We cannot declare the same variable twice in the same scope.
//The second error occurs because decimalNumber is a local variable inside the function. Therefore, we cannot use it outside the function’s scope unless we declare another variable called decimalNumber outside the function.

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const decimalNumber= 0.9;  // I have checked it by assigning different values, and it gives different output for different inputs.
console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));
// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

/*
By writing function convertToPercentage(decimalNumber), we have created a function with a parameter called 'decimalNumber'.
Inside the function, decimalNumber is already declared as a local variable because it is a parameter. Therefore, we cannot declare another variable with the same name using const in the same scope.
However, we can assign a new value to the parameter without using const. For example:
decimalNumber = 0.5;
If we assign 0.5 to the parameter inside the function, the value passed as the argument will be overwritten inside that function call. Therefore, even if we pass 0.8 as the argument, the percentage will be calculated using 0.5, and the function will return 50%.
This reassignment only changes the local parameter inside the function. It does not change the const decimalNumber = 0.9 variable declared outside the function. Therefore, the outside variable will still remain 0.9.
In the original code, we also tried to print decimalNumber outside the function, but no variable with that name had been declared in the outside scope. This would cause a ReferenceError.
In the corrected code, I created a new const variable called decimalNumber outside the function and assigned it the value 0.9. This variable is different from the function parameter because they are in different scopes, so they can have the same name.
Finally, I removed the line that reassigned 0.5 to the parameter, so the function now uses the value passed as the argument. Since the value passed is 0.9, the function returns 90%.
Finally, console.log(decimalNumber) prints 0.9, and console.log(convertToPercentage(decimalNumber)) prints 90%.
*/