// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`); //we cannot access cityOfBirth before it is defined, so we should move line 5 to line 3.
const cityOfBirth = "Bolton";
