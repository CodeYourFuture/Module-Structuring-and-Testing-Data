// Predict and explain first...
//  =============> write your prediction here
// The function logs the addition of a and b but does not return anything,making it undefined

function sum(a, b) {
  return;
  a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The return statement ends before 'a + b' because JavaScript automatically inserts a semicolon after return 
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);