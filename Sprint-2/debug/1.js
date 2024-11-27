// Predict and explain first...

function sum(a, b) {
   // The function has a 'return;' statement, which exits the function immediately.
  // The line 'a + b' is ignored because it is placed after the 'return;' statement.
  return; // The function ends here and returns undefined.
  a + b; // This code is unreachable and will not execute.
}

// Here, we call the sum function with 10 and 32.
// Since the function returns undefined, the result in the template literal will be undefined.
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Output:
// "The sum of 10 and 32 is undefined"