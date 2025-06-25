// Predict and explain first...
//  =============> write your prediction here
// - Expecting the code to print 'the sum of 10 and 32 is 42'
// - Because it's calling a function sum(10, 32) and trying to insert the result into a sentence.


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// - The function includes this:
return;
a + b;
// - In JavaScript, when one write return; on its own line, 
// - the function immediately exits and returns undefined.
// - The line a + b; is never run, because the function already returned.
// - This is due to JavaScript's automatic semicolon insertion — it treats return; as a complete statement.
// - The actual Output, the sum of 10 and 32 is undefined


// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b){
  return a + b;

}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
