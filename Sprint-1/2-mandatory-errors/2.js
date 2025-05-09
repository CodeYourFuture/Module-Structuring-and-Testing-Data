// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/* ReferenceError: Cannot access 'cityOfBirth' before initialization
This error occurs when we try to use a variable before initializing it.
cityOfBirth is being accessed before it has been declared or initialized.
JavaScript sees console.log(cityOfBirth) before cityOfBirth has been declared.