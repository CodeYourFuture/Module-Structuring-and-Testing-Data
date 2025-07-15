// Predict and explain first...

// My prediction is that the code will print 320 because the function uses console.log to print the value of a * b, and I called the function with the arguments 10 and 32.
// am also predicting the code to print "The result of multiplying 10 and 32 is 320"

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

/* the function `multiply(a, b)` uses `console.log()` to print the result of `a * b`.  
However, the function does not return anything. That means its return value is `undefined`.
when we use `${multiply(10, 32)}` inside the template string, JavaScript calls the function — but it inserts `undefined` into the string because the function didn’t return a value.
So the output becomes:
"The result of multiplying 10 and 32 is undefined". */

// Finally, correct the code to fix the problem

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// we have to use return instead of console.log()
