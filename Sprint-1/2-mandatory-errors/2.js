// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
// ReferenceError: Cannot access 'cityOfBirth' before initialization
/*
console.log(`I was born in ${cityOfBirth}`);
let cityOfBirth = "Bolton";
*/
// The error is because cityOfBirth is declared with const and is being accessed before its declaration.
// Changing const to let to help solve the problem.
// I am also declaring the variable 'cityOfBirth' before before using it.
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
// Output: I was born in Bolton
