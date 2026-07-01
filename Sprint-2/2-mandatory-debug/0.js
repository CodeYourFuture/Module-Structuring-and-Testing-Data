// Predict and explain first...

// =============> write your prediction here: My prediction is that in this function there is two console.log
//                                            the result of this two log will print one with the value only 320 and
//                                            the other one with the sentences of the log not the value.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here: because of the log inside the function the outside function can't access the result so the log will print
//                                             one  with the value only and second console.log will print the sentences with explanation of the result and
//                                             undefined value because the the function doesn't access the operation.

// Finally, correct the code to fix the problem
//  =============> write your new code here: function multiply(a, b) {
//                                                  return a * b;
//                                            }

//                                            console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
