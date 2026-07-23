// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// ERROR: Cannot access 'cityOfBirth' before initialization console.log(`I was born in ${cityOfBirth}`); //  ERROR: Cannot access 'cityOfBirth' before initialization
// Fixed: Swapped the line order to resolve the ReferenceError.


const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`); //  SUCCESS: Variable is initialized first
