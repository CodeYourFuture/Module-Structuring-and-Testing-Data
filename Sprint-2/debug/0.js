// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The function multiply is meant to take two numbers, a and b, and multiply them. But here’s the important part:
// It only prints (or logs) the result of a * b (like printing 320).
// It does not actually "return" the result to be used anywhere else.
// In JavaScript, if a function doesn’t have a return statement, it will automatically return undefined. So, this function multiply just prints the result, and when it’s done, it returns undefined.
// The last line is trying to print a sentence that includes the result of multiply(10, 32)
// The ${multiply(10, 32)} part becomes undefined because that’s what the multiply function returns and since multiplying function returns nothing
// The sentence then looks like this: The result of multiplying 10 and 32 is undefined
// To fix this we should make multiply return the answer instead of just printing it:

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
