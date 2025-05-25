// Predict and explain first...
//  =============> write your prediction here
/*The sum of 10 and 32 is undefined


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here

/*
In JavaScript, when you write return; followed by a line break, it immediately returns undefined.

The line a + b; is never reached due to automatic semicolon insertion after return;.

Therefore, the function returns undefined, and that’s what gets inserted into the template literal.

*/
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

//result
//The sum of 10 and 32 is 42
