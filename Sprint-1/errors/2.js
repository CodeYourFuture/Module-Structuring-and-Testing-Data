// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";
// ReferenceError: Cannot access 'cityOfBirth' before initialization
//this occurs when it is attempted to access the variable before declaring it with in that scope ,so "const cityOfBirth = "Bolton"; should come first.
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
