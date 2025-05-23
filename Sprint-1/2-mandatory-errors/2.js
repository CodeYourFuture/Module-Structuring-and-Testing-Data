// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);



/* 
ERROR DEBUGGING
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

  
ReferenceError: Cannot access 'cityOfBirth' before initialization

In JavaScript, variables declared with let or const are not hoisted in the same way as var. They enter a "temporal dead zone" from the start of their scope until their declaration is processed. During this time, trying to access them causes a ReferenceError.

Since JavaScript runs code from top to bottom (single-threaded), the line with console.log runs before the variable cityOfBirth is declared, leading to this error.


  */