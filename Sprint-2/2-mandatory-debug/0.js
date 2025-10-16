// Predict and explain first...

// =============> write your prediction here
// Answer
// If this program runs, I predict that the function will return undefined because it has no return statement. 
// Also, the console.log inside the multiply function will print its output to the terminal.
// Lastly, because the function returns undefined, when ${multiply(10, 32)} is used inside a template literal inside the console.log function, it will print undefined in that position.

//function multiply(a, b) {
  //console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Explanation
// function multiply(a, b) {}
// This expression defines a function named multiply.
// The function takes two parameters: a and b.

// console.log(a * b);
// This expression multipies a and b and prints the result in the terminal.
// There is no return statement, so the function implicitly returns undefined.

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// In this expression, multiply(10, 32) is called.
// Because the function returns undefined, the template literal becomes: "The result of multiplying 10 and 32 is undefined"
// That string is printed to the console.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  console.log(a * b);
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);