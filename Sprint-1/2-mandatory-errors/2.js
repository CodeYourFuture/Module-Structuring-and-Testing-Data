// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// This is related to variable hoisting.
// const keywork is a block scope and unlike var it's not hoisted automatically.
// The easiest solution is to declare the variable before to use it

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

