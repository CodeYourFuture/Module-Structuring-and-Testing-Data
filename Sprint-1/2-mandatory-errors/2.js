// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//ReferenceError: Cannot access 'cityOfBirth' before initialization
/* A lexical variable was accessed before it was initialized. This happens within any scope (global, module, function, or block) when variables declared with let or const are accessed before the place where they are declared has been executed
*/