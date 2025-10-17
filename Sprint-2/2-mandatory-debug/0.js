// Predict and explain first...

// =============> Prediction:
// The program will print "The result of multiplying 10 and 32 is undefined"
// because the function multiply does not return a value, it only prints to the console.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> Explanation:
// 1. The function multiply(a, b) uses console.log inside the function, but it does not return anything.
// 2. When we use ${multiply(10, 32)} inside the string, it tries to use the return value of multiply.
// 3. Since there is no return, JavaScript treats it as undefined.

// =============> Corrected Code:
// We need the function to return the result instead of printing it.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// Output: "The result of multiplying 10 and 32 is 320"
