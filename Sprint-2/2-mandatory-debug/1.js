// Predict and explain first...
//  =============> write your prediction here
// Undefined error as the return statement is followed by ";", line 6 it will not be executed and not return anything. 
/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
//return statement corrected, added on the same line before ';' 

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
