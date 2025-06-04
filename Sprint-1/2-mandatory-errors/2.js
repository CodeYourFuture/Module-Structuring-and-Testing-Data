// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
//The error occurs because cityOfBirth is used before it’s defined. 
//In JavaScript, variables declared with const must be declared before they are accessed, otherwise a ReferenceError will occur.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
