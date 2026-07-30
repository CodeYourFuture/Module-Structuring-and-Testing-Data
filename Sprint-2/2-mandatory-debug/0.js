// =============> write your prediction here
/*
The function should return the multiplication result so that
the returned value can be used inside the template literal.
*/
// function multiply(a, b) {
//   return a * b;
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
/*
The original function used console.log() instead of return.
console.log() displays 320 but does not give the value back to
the calling code. Therefore multiply(10, 32) returned undefined.
Using return allows the value 320 to be inserted into the string.
*/
// Finally, correct the code to fix the problem
// =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);