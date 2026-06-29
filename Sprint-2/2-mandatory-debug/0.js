// Predict and explain first...

// =============> write your prediction here
/* we haven't called the function, when we run the code it will show undefined in the console
*/


// function multiply(a, b) {
//    console.log(a * b);
// }
//
//  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// After running the code it prints:
// 1. 320
// 2. The result of multiplying 10 and 32 is undefined
// I understand that the template string evaluates its content first before printing it, so the function call in the template
// calls the function and passes the numbers 10 and 32, the functions runs and prints 320 to the console, the template string
// then print "The result of multiplying 10 and 32 is undefined" - it prints undefined because we do not have a  return statement,
// and when we don't have a return JavaScript returns undefined automatically
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
    return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);