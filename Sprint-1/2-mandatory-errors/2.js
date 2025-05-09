// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

//console.log(`I was born in ${cityOfBirth}`);
//const cityOfBirth = "Bolton";

// Answer:
// i noticed on this syntax you tried to evaluate a variable before it was declare. that was why we got an error message.
//below is the correct syntax:
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);