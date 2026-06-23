// Predict and explain first...
//  =============> write your prediction here
// this function does not return anything since the return statements has a semicolon before the command of what 
// it has to actually return
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a,b){
  return (a+b);

}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);