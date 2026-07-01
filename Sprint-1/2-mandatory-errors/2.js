// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//The error message displayed by Node.js is:
//Uncaught ReferenceError: cityOfBirth is not defined
//The error occurs because the variable 'cityofBirth' is used before it has been declared.