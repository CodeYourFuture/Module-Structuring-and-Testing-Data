// Predict and explain first...
//  =============> Problem here is that sum does not return no value because return statement and a + b is in different lines.

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> Once we put a + b back in return statement it will work with no problem.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) 
{
  return a + b;
}

console.log(`The sum of 45 and 12 is ${sum(45, 12)}`); // Output: "The sum of 10 and 32 is 42"