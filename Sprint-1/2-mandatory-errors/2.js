// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// error message: ReferenceError: Cannot access 'cityOfBirth' before initialization
// this is occurring as the computer runs the code from top to bottom
// the variable cityOfBirth is assigned in line 5 but is trying to be run in line 4
// this could be fixed by swapping the lines around