// Currently trying to print the string "I was born in Bolton" but it isn't working...
// The error is caused by using the variable before it is declared
// and by using single quotes instead of backticks for a template string

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
