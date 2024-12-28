// Predict and explain first...

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


// the function will return undefined, because when it is called in last line, it starts with return statement followed by semicolon which causes the function to end without execution a + b statement.
// so we will see "The sum of 10 and 32 is undefined" in console.
// to solve it and execute proper result, we need to write the function body statement as "return a + b;"