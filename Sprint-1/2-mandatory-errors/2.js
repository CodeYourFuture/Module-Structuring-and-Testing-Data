// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// we are trying to use cityOfBirth before it has been declared. In JavaScript, variables declared with let or const cannot be accessed before they are defined.
// It works because we declare cityOfBirth before using it.