// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);


////Erorr : ReferenceError: Cannot access 'cityOfBirth' before initialization
//Fix 
// Is to put the variable declaration line before the console.log()