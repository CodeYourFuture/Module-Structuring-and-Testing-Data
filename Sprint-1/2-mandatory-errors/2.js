// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// Reference error:can not access "cityOfBirth" before initialization
// in this code the variable "cityOfBirth" is used before it is been declared"
// solution: Move  the const variable  above  the console.log
