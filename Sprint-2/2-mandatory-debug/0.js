// Predict and explain first...
// The first console.log prints 320
//It throws an error at console.log.
// =============> write your prediction here

//    function multiply(a, b) {
//      console.log(a * b);
//    }
//    console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// It return the following output:
// 320
// The result of multiplying 10 and 32 is undefined

// why?
//the computer reads the values in the second console.log "multiply(10, 32)" and
//the first console.log only prints the value, it does not store it.
//the second console.log outputs the template literals and undefined
// as it has no value to reach.


// Finally, correct the code to fix the problem
//  =============> write your new code here
  function multiply(a, b) {
    return (a * b);
  }

  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
  //prints: The result of multiplying 10 and 32 is 320