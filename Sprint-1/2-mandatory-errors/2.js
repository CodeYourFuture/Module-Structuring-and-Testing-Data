// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/*
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
*/ 

// ReferenceError: Cannot access 'cityOfBirth' before initialization.
// The error occurs because 'cityOfBirth' is declared using 'const' after it is referenced in the console.log statement.
// To fix this error, we can move the declaration of 'cityOfBirth' before the console.log statement.
// Corrected code:

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// Now, the variable 'cityOfBirth' is declared before it is used, and the code will run without any error.
// The output will be: I was born in Bolton
