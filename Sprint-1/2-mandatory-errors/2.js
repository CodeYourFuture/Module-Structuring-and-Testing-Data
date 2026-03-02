// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ? The error was cannot acess 'cityofBirth' before initialization.
// This happpend becouse CityofBirth was declared with a const but was used before its decleration.

const cityofBirth = "Bolton";
console.log(`I was born in ${cityofBirth}`);


