// Currently trying to print the string "I was born in Bolton" but it isn't working...
// Error: ReferenceError - cityOfBirth is used before it is declared.
// const is not hoisted like var. Fix: declare the variable before using it.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
