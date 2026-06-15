
The problem is unexpected identifier "problem"
The problem is the result doesn't print the mulitplication of the number,
because we should not call the function inside the function;


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

Instead, we should define the expression a * b
and return the expression.

/ function multiply(a, b) {
    return (a * b);
  }

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);