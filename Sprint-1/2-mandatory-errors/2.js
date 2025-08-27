// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//It will not work because the variable cityOfBirth is declared after the console.log statement.

// This is the correct way.
//const cityOfBirth = "Bolton";
// console.log(`I was born in ${cityOfBirth}`);