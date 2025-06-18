// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// this code has order problem. const and let has to have it`s value has to be declared before you use it.
// to fix it we will change the order of the code.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
