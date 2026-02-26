// Predict and explain first...
//  =============> write your prediction here

// The computer reads the return statement and stops executing the function.
// So the function stops running before it reaches a + b.
// Because of that, nothing is returned,
// and the console.log prints the text and the values are undefined.

// current output:The sum of 10 and 32 is undefined

// Fix the code to make it work:
  // function sum(a, b) {
  //   return a + b;
  // }
  // console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

//To make it work, I need to return a + b.
// Finally, correct the code to fix the problem
//  =============> write your new code here

   function sum(a, b) {
     return a + b;
   }
   console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);