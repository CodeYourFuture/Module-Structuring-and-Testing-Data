// Predict and explain first...
//  =============> write your prediction here
// The function returns nothing because the return statement has no value. 
// Once JavaScript reaches return, the function stops executing. 
// Therefore, the line after it is dead code and never runs. 
// Since the function does not return a value, it returns undefined, which is why the template string displays undefined.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function now correctly returns the result of a + b. 
// Since the addition is included in the return statement, the function sends back the calculated value. 
// Therefore, when the function is called inside the template string, it displays the correct result, 42.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
