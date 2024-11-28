// Predict and explain first...

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

//The final string will be: "The sum of 10 and 32 is undefined".

//The semicolon after return causes the function to terminate immediately,
//so a + b does not execute. As a result, the function returns undefined
//which we can see in the console as part of the string.
