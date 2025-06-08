// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// That is because the console.log is going first than variable which even doesn't exist.
// Causes a ReferenceError.
