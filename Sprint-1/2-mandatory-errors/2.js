// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
// Variables declared with (const) (or let) are not accessible before their declaration, even though they are hoisted (set aside in memory).
// So, when console.log(...) runs, cityOfBirth exists in memory but is not yet initialized, so trying to access it throws an error.

// console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
