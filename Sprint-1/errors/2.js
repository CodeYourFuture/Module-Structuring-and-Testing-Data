// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// it will through reference error, 
// because we are trying to access cityOfBirth variable before initialization in Line 7

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton"; 

// Correct way is below
 
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);