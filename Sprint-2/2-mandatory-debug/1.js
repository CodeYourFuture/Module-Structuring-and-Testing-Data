// Predict and explain first...
//  =============> write your prediction here
// I expect that we will get an undefined output on line 10 since the function does not return anything

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function sum defines that a+b must be added together but before that return is used with no argument defined and we we exit the function immediately when it is called on line 10 the function returns to the string undefined.
// Another issue is that a + b is placed after return so that line is unreachable and will never run.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
