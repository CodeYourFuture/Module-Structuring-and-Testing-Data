// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// The error happened because cityOfBirth is being used before it has been defined. 
// In Javascript, the computer reads code from top to bottom, so the declaration needs to be above the console.log for the computer to recognise it.