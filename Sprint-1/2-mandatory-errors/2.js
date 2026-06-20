// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//ReferenceError: Cannot access 'cityOfBirth' before initialization.
//This error indicates that the variable 'cityOfBirth' cannot be accessed.
//It is caused by the wrong order of code. We need to move the declaration of 'cityOfBirth' before the fourth line which calls the variable.