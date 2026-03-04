// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// The error happens because cityOfBirth is used before it is declared.
// Const variable cannot be used before declaration.
// Move the variable delaration before the console.log line.

