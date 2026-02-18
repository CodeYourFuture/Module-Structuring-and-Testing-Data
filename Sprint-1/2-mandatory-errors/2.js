// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// The error is that we are trying to use the variable cityOfBirth before it has been declared and assigned a value. In JavaScript, variables declared with let or const are not hoisted, meaning they cannot be accessed before they are declared. To fix this error, we need to declare and assign a value to cityOfBirth before using it in the console.log statement.
