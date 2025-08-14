// Predict and explain first...
//  =============> write your prediction here
// because return; is in own line without a and b, probably we get undefined.

// =============> write your explanation here
//When JavaScript sees return, it stops the function immediately nad a + b never run.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
