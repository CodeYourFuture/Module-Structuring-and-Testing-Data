// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

//The error occurs because you are trying to use the variable cityOfBirth before it is defined.
//  In JavaScript, the line const cityOfBirth = "Bolton"; 
// needs to run before you try to use cityOfBirth in the console.log() statement. See the corrected code below:

const cityOfBirth = "Bolton";  // First, define the variable
console.log(`I was born in ${cityOfBirth}`);  // Then, use it
