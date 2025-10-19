// Predict and explain first...

// =============> it will throw a syntaxerror because I can not use  nested console.log. 

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The result of multiplying 10 and 32 is undefined undefined because If I want to keep the value with me after the function finishes, I must use return.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return(a*b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
