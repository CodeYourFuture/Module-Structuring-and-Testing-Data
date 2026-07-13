// Predict and explain first...
//  =============> write your prediction here
//It will give an error as we have to mention what are we returning, by simply putting the return statement doesn't automatically 
//return anything, except undefined, and then we are doing an addition of two number but we haven't return the result of it,
//when the function will be called in line 11, it will print undefined with the sentence mentioned in literals.
/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> write your explanation here
//I firstly fixed the return statement.
//outside of the function I create another variable that stores function value.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a+b;
}
const result = sum(10,32);
console.log(`The sum of 10 and 32 is ${result}`);