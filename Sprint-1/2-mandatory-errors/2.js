// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?   The error here is due to using a variable before it's declared.


// Fixed: Declare the variable before using it
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);