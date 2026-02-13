// Predict and explain first...
//  =============> This function will not return the sum of a + b as the operation is located on the next line or return. so we ll have a syntax error.

/*function sum(a, b) {
  return;
  a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> after running the code I got undefined on the output as our function does not return anything. because after return keyword our function do not operate the codes.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);