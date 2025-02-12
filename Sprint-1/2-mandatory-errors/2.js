// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// It's because cityOfBirth used before it is declared. in javaScript codes read line by line.
// so if we declaring the variable before console.log, the code gonna work.