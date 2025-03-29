// Predict and explain first...
//  =============> write your prediction here
//I will not generate output because return statement is before the a+b statement. Return doesn't contain values.
function sum(a, b) {
    return;
    a + b;
  }
  
  console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
  
  // =============> write your explanation here
  // Finally, correct the code to fix the problem
  //  =============> write your new code here
  function sum(a, b) {
    return a +b;
  }