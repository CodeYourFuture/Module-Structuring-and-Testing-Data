// Predict and explain first...

// =============> write your prediction here : this code didn't declare the  two global variables and the result will be undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here : the code have two number variables but they are not declared global in this case the
//                                              global console.log have undefined value
// Finally, correct the code to fix the problem
//  =============> write your new code here  let a = 10;
//                                           let b = 32;
//                                            function multiply(a, b) {
//                                                         (a * b);
//                                              }

//                                              console.log(`The result of multiplying 10 and 32 is ${(a * b)}`);
