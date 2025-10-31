// Predict and explain first...

// =============> In line 6, instead of console.log printing the result of multiply(10, 32), return a*b would be better
//because the console.log would only print a*b.

//function multiply(a, b) {
  //console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> After running the code, we got 'the result of multiplying 10 and 32 is undefined'
// as the multiply parameters weren't considered as parameters inside the function multiply.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b; 
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);