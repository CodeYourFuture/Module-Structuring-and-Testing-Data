// Predict and explain first...
//  =============> write your prediction here
    //we have to delete the semicolon used after the return statement in the sum function, because it will terminate the function and return undefined.
    /* below is the original code
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
    // same as my prediction.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;   // removed the semicolon after the return statement to fix the problem.
  // and also assigned the value of a + b to the return statement so that it will return the sum of a and b. 
  // unlike my prediction removing the semicolon only wont do the fix. because in javascript there is a feature called automatic semicolon insertion which will automatically insert a semicolon after the return statement 
  // when playing computer with this code  it will read return with out ; as same as with it. - same error result
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);