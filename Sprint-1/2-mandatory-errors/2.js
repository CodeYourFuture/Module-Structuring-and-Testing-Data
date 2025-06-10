// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
/*
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
*/
//Error: Cannot access 'cityOfBirth' before initialization
// its trying to call the variable before its even been defined
// if you want to fix change the order to start with defining the variable
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
