// Predict and explain first...
//  =============> The semi colon ; after retunr will results in syntax error. 

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> Unlike my expectation the code run without error as "The sum of 10 and 32 is undefined"
// Finally, correct the code to fix the problem
//  =============> write your new code here

// we just need to delete the ;  after return and bring a+b side by side as retun a+b; 
