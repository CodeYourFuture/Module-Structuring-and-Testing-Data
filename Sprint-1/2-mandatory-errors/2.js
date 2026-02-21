// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
// The error was a ReferenceError because the variable cityOfBirth was used in
// the console.log before it was declared with const."