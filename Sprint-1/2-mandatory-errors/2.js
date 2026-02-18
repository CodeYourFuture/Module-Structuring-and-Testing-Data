// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// ReferenceError: Cannot access 'cityOfBirth' before initialization
// This error appears because the variable cityOfBirth is created after the console.log, so the computer cannot access it.
// To fix the error I just moved the console.log below the variable declaration
