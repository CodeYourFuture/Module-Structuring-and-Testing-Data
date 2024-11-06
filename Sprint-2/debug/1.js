// Predict and explain first...

/*function sum(a, b) {
  return;
  a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

/*Answer:
the function contains a return; statement with no value specified immediately after it. In JavaScript, this means the function will exit and return undefined as soon as it hits return;.
The line a + b; is after the return statement, so it will never execute. The addition a + b will be ignored entirely.The sum function will return undefined because it exits immediately at the return statement. So when we call it in the template literal, the output will be:
To fix this, we need to remove the return; line and place return a + b; in its place.*/

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);