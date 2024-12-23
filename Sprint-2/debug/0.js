// Predict and explain first...

/*
  the function won't return anything because we did not have any return so this will be undefine
  it will print what is in the console but no in the second console because we are callin the function which will return undefine



  function multiply(a, b) {
    console.log(a * b);
  }
*/
// ==================== this will return the arguments sent in the second console ====================

function multiply(a, b) {
  return(a * b);
}


console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
