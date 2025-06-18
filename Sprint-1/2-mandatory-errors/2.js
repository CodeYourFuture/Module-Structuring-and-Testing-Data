// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
//The error here is that we are trying to run the code without having declared the variable cityOfBirth first.  To reiterate, this code
// caused an error(ReferenceError) because of the Temporal Dead Zone (TDZ) caused by using a const variable before it's declared.
// This code below should work.

const cityOfBirth = 'Bolton';
console.log(`I was born in ${cityOfBirth}`);