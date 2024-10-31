// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?


const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// we just need to move the console.log() to avoid render and expression which was calling the data declared in the variable 
//ReferenceError: Cannot access 'cityOfBirth' before initialization