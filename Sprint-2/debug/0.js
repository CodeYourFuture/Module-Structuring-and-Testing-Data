// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);

}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
//The multiply function logs 320 to the console.
//The template string ${multiply(10, 32)} evaluates to undefined, because multiply doesn't return anything.
//to fix this we should modify the multiply function to return the result instead of just logging it.
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);