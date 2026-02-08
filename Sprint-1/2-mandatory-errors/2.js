// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// The error is that the variable cityOfBirth isn't declared and assigned a value.
// To fix the error, we need to declare and assign a value to cityOfBirth before using it in the console.log statement.

// The corrected code is below:

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
