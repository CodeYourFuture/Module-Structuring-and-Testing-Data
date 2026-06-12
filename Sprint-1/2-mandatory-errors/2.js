// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);



/*
The error occurs because cityOfBirth is accessed before it is initialized.

Although the variable is registered during hoisting, it is placed in the Temporal Dead Zone,
which prevents it from being used until the declaration line is executed.

This results in a ReferenceError: Cannot access 'cityOfBirth' before initialization.
*/
