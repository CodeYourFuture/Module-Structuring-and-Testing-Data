// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// The console.log was written before the variable was declared, so JavaScript didn't know what cityOfBirth was yet. Moving the declaration above the console.log fixes it.