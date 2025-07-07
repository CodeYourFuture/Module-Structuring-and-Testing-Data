// Predict and explain first...
//  =============> write your prediction here
// sure this function wont work because, hang on.. I should predict and pretend that everything is fine
// the function will return with summary of given parameters and console.log will verify it

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//function will execute line the code and escape from the function block whenever it "sees" return.. it will return with any expression put on it
// in this function a+b which is expected as the result is placed after return line because return has ";" so i wont bother look the next line.
// just remove the semicolon next to the return.. and put a+b instead, because some how "prettier" as trusty worthy formatter for this course will always add extra ; for every logical expression (somehow).. :) xixixixi
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
