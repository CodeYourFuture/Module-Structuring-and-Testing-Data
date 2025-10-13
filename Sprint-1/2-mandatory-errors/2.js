// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// The error is that cityOfBirth is used before it is declared. 
// In JavaScript, variables declared with const or let cannot be accessed before their declaration due to the temporal dead zone. 
// To fix the error, we need to declare and initialize cityOfBirth before using it in the console.log statement.

