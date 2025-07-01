// Predict and explain first...

// =============> console.log(a*b) is inside the function, so it does not return anything instead return undefined by default

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> When we call multiply(10, 32) inside the template string, it first runs console.log(320) inside the function.
// Then it tries to insert the function’s return value (which is undefined) into the string.
// So, we’ll see:csharp
//               Copy
//               Edit
//               320
//              The result of multiplying 10 and 32 is undefined

// Finally, correct the code to fix the problem
//  =============> my new code:
function multiply(a,b) {return(a*b)};

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
