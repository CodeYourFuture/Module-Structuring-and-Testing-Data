// Predict and explain first...

// =============> write your prediction here
// error will be in result of code execution,
// result of multiplication will be displayed in wrong place(in separate line, not dedicated string)

/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here

// error will appear because function multiply does not return string, 
// and in last console.log part '${multiply(10, 32)}' will be undefined

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);