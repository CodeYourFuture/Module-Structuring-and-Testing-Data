// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
/* The function "multiply" is not returning a value by way of stating "return" it is only
printing to the console, which would show as undefined.
This can be fixed by writing "return(a*b);" in the function instead so that the value is stored
when the function is called at the end console.log.
*/