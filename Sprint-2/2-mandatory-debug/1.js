// Predict and explain first...
//  =============> return is not followed by anything (directly), and a+b is after the ";" after return. in a function nothing gets executed after return

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> return value is undefined, so in the console log sentence the result (return value) is substituted with "undefined" instead of the actual sum
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
