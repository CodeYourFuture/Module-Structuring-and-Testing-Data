// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//error we get here is ReferenceError: cityOfBirth is not defined
//In JS variable declared with let and const can not be accessed before their declaration.

//correct order is:
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);