// Predict and explain first...
//  =============> The code will run without crashing, but the output will say: "The sum of 10 and 32 is undefined"

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> In the `sum` function, the `return` statement is followed by a semicolon, which ends the function early before it reaches `a + b`. This means the function returns `undefined` instead of the actual sum. In JavaScript, if you put a line break right after `return`, JavaScript automatically ends the statement. As a result, `a + b` is never executed, and `undefined` is returned.

// Finally, correct the code to fix the problem
//  =============> 
  function sum(a, b) {
    return a + b;
  }
  
  console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
