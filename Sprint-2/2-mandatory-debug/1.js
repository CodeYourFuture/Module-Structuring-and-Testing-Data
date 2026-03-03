// Predict and explain first...
//  =============> write your prediction here
// the semicolon after "return" will hamper the return statement because it 
// will end the statement before it has been defined what it needs to return.


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// as above

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);