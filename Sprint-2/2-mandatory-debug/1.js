// Predict and explain first...
//  =============> it should be{return a+b;}; rather than have semicolon between return and a+b

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> The return; statement immediately exits the function and returns undefined.
// The line a + b; after return; never runs — it's unreachable code.So, when we call sum(10, 32), it returns undefined.
// Output we get:
// python
// Copy
// Edit
// The sum of 10 and 32 is undefined
// Finally, correct the code to fix the problem
//  =============> my new code:
function sum (a,b) {return a+b;};

console.log (`The sum of 10 and 32 is ${sum(10, 32)}`);

// the output: The sum of 10 and 32 is 42
