// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

//Prediction: The program will fail with a SyntaxError because 'decimalNumber' is redeclared.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5; <--- this line causes the syntaxError.
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

//console.log(decimalNumber); <--- this line causes the ReferenceError.

// =============> write your explanation here
//1. Inside the function: Just like the previous example, the parameter `decimalNumber` acts as a local variable. Trying to redeclare it with `const decimalNumber = 0.5;` causes a crash.
// Additionally, hardcoding 0.5 defeats the purpose of having a parameter at all.

// 2. Outside the function: The variable `decimalNumber` is "scoped" to the function. It doesn't exist in the outside world. When `console.log(decimalNumber)` runs globally, JavaScript doesn't know what it is,
// causing a ReferenceError. You need to call the function and pass the number as an argument instead.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));
