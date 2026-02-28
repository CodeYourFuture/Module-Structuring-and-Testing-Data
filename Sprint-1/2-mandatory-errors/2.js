/**
 *
// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
*/

/**
 * The error is that you're trying to use the variable cityOfBirth in the template literal before it has been declared and initialized.

In JavaScript, you cannot access a const variable before its declaration. This creates a Temporal Dead Zone (TDZ) error.

Fix: Move the console.log statement after the variable declaration:
*/

// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

