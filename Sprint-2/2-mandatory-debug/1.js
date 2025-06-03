// Predict and explain first...
//  =============> write your prediction here
//    return statement not given anything to return
// a+b after return statement, not assigned to anything. no red line though. is this valid code somehow? 0.0

//  || ORIGINAL CODE

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//  The sum of 10 and 32 is undefined
// Same as before, function call returns undefined by default

// Finally, correct the code to fix the problem
//  =============>

function sum(a,b) {
  return(a+b);
}

num1 = 10;
num2 = 32;

console.log(`The sum of ${num1} and ${num2} is ${sum(num1,num2)}!`);
