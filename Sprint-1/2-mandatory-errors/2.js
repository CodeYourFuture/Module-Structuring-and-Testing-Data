// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
// -ReferenceError: Cannot access 'cityOfBirth' before initialization
// First, we should assign the variable, then use it.

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
// Correct version:
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
