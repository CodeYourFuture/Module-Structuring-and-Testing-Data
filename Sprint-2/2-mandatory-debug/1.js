// Predict and explain first...
//  =============> As there is a ; after return this means this function will return 'undefined' as it will not be able to run a + b. There is no value after return. The console.log statement will be The sum of 10 and 32 is undefined.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> As predicted the console.log statement returned The sum of 10 and 32 is undefined. To fix this I will remove the ; after return so that the function can return the sum of a + b
// Finally, correct the code to fix the problem
//  =============> 
function sum(a, b) {
  return a + b;
}