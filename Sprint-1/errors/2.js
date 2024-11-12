// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/* Line 4 returns a ReferenceError because the constant cityOfBirth is declared after the print so
cannot be initialized */ 