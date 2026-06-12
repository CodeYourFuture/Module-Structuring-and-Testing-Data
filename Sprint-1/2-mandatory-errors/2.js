// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// Martin response - cityOfBirth was being logged before it was declared.  I have moved the variable initialisation above the console.log line and this now works as expected.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
