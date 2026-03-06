// Predict and explain first...

// =============> write your prediction here
// I predict the program will print 320 first.
// Then it will print "the result of multipying 10 and 32 is undefined"
// becouse the function logs the result but does not return it.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The problem is that the function uses console.log insted ofreturning the value.
// Becouse the function does not return anything, the value of multiply(10, 32)
// becomes undefined when it is used insdie the temple string.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log('The result of multiplying 10 and 32 is ' + multiply(10, 32));