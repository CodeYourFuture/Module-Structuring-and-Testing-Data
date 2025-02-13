// Predict and explain first...
//  =============> this is logical error in line 5 and 6 
//return didnt have any thing to return and a+b is neither stored in avariable nor returned.

//function sum(a, b) {
//  return;
//  a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b; 
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);  //This code works just fine.
