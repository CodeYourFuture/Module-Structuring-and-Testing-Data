// Predict and explain first...
// ==============> This will print "The sum of 10 and 32 is undefined", because line 5 has a bare "return;" with nothing after it - this immediately exits the function and returns undefined. Line 6 (a + b) never runs.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// ==============> The function had "return;" on its own line, followed by "a + b;" on the next line. Once JavaScript hits return; with nothing after it, the function ends immediately and returns undefined - the a + b line is unreachable and never executes.

// Finally, correct the code to fix the problem
// ==============> function sum(a, b) {
//   return a + b;
// }
