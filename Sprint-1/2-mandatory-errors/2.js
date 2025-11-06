// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// this is a very common JavaScript error related to variable hoisting and the temporal dead zone.
// Simply declare the variable before you use it

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

