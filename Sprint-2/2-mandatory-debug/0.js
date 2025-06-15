// Predict and explain first...

// =============> write your prediction here
      // What I predict is that the console.log which is 
      // outside the function will pass the parameters 10 and 32 to the function
      // Then the console.log(a * b) which is inside the function will print out 
      // to the terminal the multiplication of a by b
function multiply(a, b) {
  console.log(a * b);
}

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
  // The outside console.log is printing "The result of multiplying 10 and 32 is undefined"
  // Because we did not return the result of the function. 
  // Firstly, I modified the code by adding return to console.log(a * b);
  // and I run the code also I got undefined, this is because console.log always 
  // return undefined what we need to do is assign the multiplication to a variable
  // then print this variable using console.log

// Finally, correct the code to fix the problem
//  =============> write your new code here
              // function multiply(a, b) {
              //   const multiplicationResult = (a * b);
              //   console.log(a *b)
              //   return multiplicationResult
                
              // }

              // console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
