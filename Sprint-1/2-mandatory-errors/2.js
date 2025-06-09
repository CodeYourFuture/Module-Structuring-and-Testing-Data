// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

//console.log(`I was born in ${cityOfBirth}`);
//const cityOfBirth = "Bolton";
// The error is that 'cityOfBirth' is being used before it has been declared.
// To fix this, we can declare 'cityOfBirth' before using it in the console.log statement.
// Corrected code:
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
// Now the code will run without errors and print "I was born in Bolton".
