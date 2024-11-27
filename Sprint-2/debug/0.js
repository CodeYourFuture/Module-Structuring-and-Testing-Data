// Predict and explain first...

function multiply(a, b) {
  // This function calculates the product of two numbers a and b.
  // It logs the result (a * b) to the console but does not return anything.
  console.log(a * b);
}


// Here, we are calling the multiply function with 10 and 32.
// The function will log the result (320) to the console.
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


// However, the multiply function does not return a value. 
// So, ${multiply(10, 32)} becomes undefined.
// The final output of this console.log will be:
// 1. First, 320 is printed from the multiply function.
// 2. Then, "The result of multiplying 10 and 32 is undefined" is printed.