// Predict and explain first...
//  =============> As the function is not retuning anything, we're going to see undefined on the console.


function sum(a, b) {
  return a + b;
}


console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


// =============> The function uses parameters a and b. It calculates the addition of a and b. Supposedly it should return the result and then we can use the value of the function, but it is returning nothing at all as return is closed without being specified.
// Finally, correct the code to fix the problem
/* =============> function sum(a, b) {
return a + b;
}
console.log(`The sum of 10 and 32 is ${(10, 32)}`);
*/
