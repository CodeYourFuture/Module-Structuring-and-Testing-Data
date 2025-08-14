// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?


const cityOfBirth = "Bolton"; // The variable was initially declared AFTER the console.log statement, which caused a 'ReferenceError'. It should be declared before this. 
console.log(`I was born in ${cityOfBirth}`);

