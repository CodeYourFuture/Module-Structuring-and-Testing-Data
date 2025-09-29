// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
//The variable cityOfBirth is being used before it's declared. To fix the error, we need to declare the variable before using it in the console.log statement.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
