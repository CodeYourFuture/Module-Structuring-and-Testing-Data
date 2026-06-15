// Predict and explain first...
//  =============> due to the semicolon on line 5 , the function will not progress further. In the console line template literal becomes 
//`The sum of 10 and 32 is ${undefined}`
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> my prediction was correct, i have removed the semicolon and put the expression on line 6 with the return function on line 5.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
