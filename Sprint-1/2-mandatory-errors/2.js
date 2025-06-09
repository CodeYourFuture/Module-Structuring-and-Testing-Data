// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//The error is that the variable is declared after the print statement. 
//In javascript the variables declared with const or let should be at the top of code
//block. Here they are trying to access a variable before its declaration line is
//executed.
//To fix it we do this
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);