// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

//The error is that the variable cityOfBirth is being used before it has been declared.JavaScript executes code line by line from top to bottom, so you must declare and assign a value to the variable before using it.
// In JavaScript, variables declared with let or const are not hoisted, meaning they cannot be accessed before their declaration.
