// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//ReferenceError: Cannot access 'cityOfBirth' before initialization
//this occurred because the variable 'cityOfBirth' was accessed on line 4, but before line 5 - where it was initialised.
