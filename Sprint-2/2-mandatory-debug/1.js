// Predict and explain first...
//  =============> write your prediction here
// I think this function will return undefined, because it has ; after return and return is empty

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here Return is empty and we will get undefined when we will call function, a + b; do nothing in this case
// Finally, correct the code to fix the problem

//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
