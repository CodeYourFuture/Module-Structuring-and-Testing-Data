// Predict and explain first...
//  =============> I predict an error will occur as the line 5 and 6 seems not to be a correct syntax to return a value that the function needs to. 

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> When I run the code, 'The sum of 10 and 32 is undefined' comes, it is because the line 5 and 6 need to be merge to properly return a value.
// Finally, correct the code to fix the problem
//  =============> function sum(a, b) {
//  =============>   return a + b;
//  =============> }

//  =============> console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
