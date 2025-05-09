// Predict and explain first...
//  =============> write your prediction here
//I think there will be some error running this code because of incorrect syntax of line 9 and line 10
//The output I received after running this code was :
//The sum of 10 and 32 is undefined
//I believe removing the semicolon on line 9 will fix the issue.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//The semicolon represents it is the end of code or command we are giving to the computer.
//In the exercise, putting semicolon after return without including the value meant that we gave computer command but ended it before adding any value
//Correcting the semicolon has fixed this code.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

//The output now is :
//The sum of 10 and 32 is 42
