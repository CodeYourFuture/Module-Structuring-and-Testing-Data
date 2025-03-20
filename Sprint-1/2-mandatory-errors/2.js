// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// there was a hoisting error the variable was only initialized after the console.log so i moved the declaration to the top

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

