// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

The code brings the error “cityOfBirth is not defined” because the cityOfBirth is used before it is defined.Line 5 should come before line 4 to have the proper result.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);