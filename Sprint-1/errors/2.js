// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
/*
The error in the "Wrong way to do it" section is that it's trying to use the cityOfBirth variable before it's declared. In JavaScript, variables are not hoisted when using const or let, meaning they can't be used before they're declared in the code. 
*/

// Wrong way to do it
/*
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
*/

// Correct way to do it
let cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`); // I was born in Bolton
