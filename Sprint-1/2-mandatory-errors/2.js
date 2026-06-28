// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/* ReferenceError: Cannot access 'cityOfBirth' before initialisation occured because cityOfBirth is used before it is declared. 
JavaScript executes code from top to bottom, and the console.log tries to access cityOfBirth before the const cityOfBirth = "Bolton"; line has run.
Variables declared with const cannot be accessed before their declaration, so JavaScript throws a ReferenceError. 
To fix this error, move the declaration above the console.log
Like this:
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
*/