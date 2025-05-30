// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// The error is that the variable cityOfBirth is not defined before it is used.
// To fix this, we need to declare the variable cityOfBirth before using it.
// Declare the variable cityOfBirth and assign it the value "Bolton"
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
