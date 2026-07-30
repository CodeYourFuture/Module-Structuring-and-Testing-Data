// =============> write your prediction here

/*The program will output:
"The sum of 10 and 32 is undefined"
because the function returns before performing the addition.*/

// =============> write your explanation here

/*The `return` statement immediately stops the function.
Because it has no value after it, the function returns `undefined`.
The `a + b` line is never executed.*/

// Finally, correct the code to fix the problem
// =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);