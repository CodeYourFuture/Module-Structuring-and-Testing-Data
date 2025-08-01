// Predict and explain first...

// =============> The console will print the result of the multiplication (320), but the final output will also include `undefined` in the string, because the `multiply` function doesn't return a value.


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The function `multiply(a, b)` logs the result of `a * b` to the console, but it does not return anything. When you use the function call inside a template string, JavaScript expects a return value to insert into the string. Since `multiply(10, 32)` returns `undefined`, the final output will be: 320. The result of multiplying 10 and 32 is undefined. This happens because the function only logs the result but doesn’t return it.

// Finally, correct the code to fix the problem
//  =============> 
  function multiply(a, b) {
    return a * b;
  }
  
  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
