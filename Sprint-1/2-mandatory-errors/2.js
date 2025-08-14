// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

// The error occurs because the variable `cityOfBirth` is being used before it has been declared.
// In JavaScript, variables declared with `const` must be initialized before they can be used.
// To fix this, we need to declare the variable before using it in the console.log statement.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
