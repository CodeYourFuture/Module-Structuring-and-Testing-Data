// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Line#3: A function named multiply is defined,takes two parameters a and b.
// Line#4: calling the multiply function.
// Line#7:The template literal (${multiply(10, 32)}) tries to include the result of multiply(10, 32) in the string.
// Result: Undefined
function multiply(a, b) {return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// The multiply function returns the result.

  