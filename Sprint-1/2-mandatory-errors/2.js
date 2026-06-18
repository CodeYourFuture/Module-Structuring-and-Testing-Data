// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton"; // The variable cityOfBirth is declared after it is used in the console.log statement.

// The order of the code should be as below.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
