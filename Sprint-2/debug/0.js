// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//Line3: A function named multiply is defined. It takes two parameters a and b.
//Line4: Calling the multiply function(print)
//Line7: The template literal (${multiply(10, 32)}) tries to include the result of multiply(10, 32) in the string.
//Output: The result of multiplying 10 and 32 is undefined
//Fixed code:
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
//Explain: Multiply function returns the result instead of just printing


