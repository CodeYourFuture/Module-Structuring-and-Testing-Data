// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";


Answer:

//Error because cityOfBirth is used before it is declared.
//We need to define the variable first, then use it.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
