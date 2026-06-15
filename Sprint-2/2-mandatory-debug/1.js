Unexpected identifier "problem"
variable hasn't been defined so the variable cannot do function.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


because return should be followed by a + b;
the final result doesn't return the value. 


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
