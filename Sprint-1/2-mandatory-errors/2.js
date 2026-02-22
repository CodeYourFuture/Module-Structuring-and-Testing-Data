// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// Explanation: 
// The error is "ReferenceError: Cannot access 'cityOfBirth' before initialization."
// JavaScript executes code from top to bottom. We tried to print 'cityOfBirth' before we actually declared and initialized it on the next line.