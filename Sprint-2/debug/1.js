function sum(a, b) {
  return;  // The function returns undefined, so this line will exit the function before the sum can be computed.
  a + b;  // This line is never executed due to the return statement above.
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);  // The output will be: "The sum of 10 and 32 is undefined"

