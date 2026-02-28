// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/*the main the error here is that the console.log try to print the expression string template with the variable cityOfBirth. But since in the variable
cityOfBirth declare after the console.log, so the console.log when try to involve the cityOfBirth will return error since the it doesn't exist.
*/
