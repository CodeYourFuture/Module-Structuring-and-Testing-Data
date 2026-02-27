// Predict and explain first...
//  =============> The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> the function sum returns Nul because it's straight followed by semicolon thate ends the statement
// also the statement a + b is in new line
// Finally, correct the code to fix the problem
//  =============> my new code
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

