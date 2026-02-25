// Currently trying to print the string "I was born in Bolton" but it isn't working...
 
// JavaScript is single-threaded because it executes tasks in a single flow using a call stack. The function was called before it was declared, 
// It was also declared with const, which can not be hoisted to the top, like var.
// this result to undefined.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
