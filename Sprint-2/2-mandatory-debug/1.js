// Predict and explain first...
//  =============> write your prediction here
output is : The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
In this function ,the first statement is return and it ends without any action or result.calling this function returns undefined value.
// Finally, correct the code to fix the problem
//  =============> write your new code here
  function sum(a, b) {
  return  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
