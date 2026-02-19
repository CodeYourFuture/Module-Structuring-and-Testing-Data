// Predict and explain first...

// =============> write your prediction here
/**
 * It display "320" and "The result of multiplying 10 and 32 is undefined"
 */

/**
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here

/** Explanation:
 * 
 * The following function takes two arguments as input and display the multiplication result.
 * But instead of using the function "console.log" it shoudl use the function "return (a * b)".
 * That's the reason it displays "undefined".
 */

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

