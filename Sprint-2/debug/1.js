// Predict and explain first...

// function sum(a, b) {
//   return; // this line will return undefined.
//   a + b; // this line will never execute because this is replaced after return
// }

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// correct way...

function sum(a, b) {
  return a + b; 
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);