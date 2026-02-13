// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";


// The 'ReferenceError' occurs because the code tries to use the variable cityOfBirth before it has been defined.
// JavaScript reads from top to bottom, so the variable must be declared BEFORE it is called in the console.log.