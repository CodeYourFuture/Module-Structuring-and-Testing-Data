// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// The error in the code is that the variable `cityOfBirth` is being used before it is declared and assigned a value.
// In JavaScript, variables declared with `const` (or `let`) are not hoisted in the same way as `var`,
// meaning they cannot be accessed before their declaration.
// To fix this error, we need to declare and assign a value to `cityOfBirth` before using it in the `console.log` statement.
// Here's the corrected code:
//const cityOfBirth = "Bolton";
//console.log(`I was born in ${cityOfBirth}`);
