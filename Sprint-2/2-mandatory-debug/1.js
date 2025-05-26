// Predict and explain first...
//  =============> write your prediction here
// there is a syntax error . in line 6 we used return but we left it empty and put the semicolon . that  means line number 8 will not be readable

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// "The sum of 10 and 32 is undefined" this is the output of it, the function sum has nothing to give in other word it is empty (undefined)
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);