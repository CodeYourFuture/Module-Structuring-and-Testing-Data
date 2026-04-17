// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";


//ANS:
//"Cannot access 'cityOfBirth' before initialization."
//SOlution:

const cityOfBirth = "Bolton"; // 1. Define it first
console.log(`I was born in ${cityOfBirth}`); // 2. Use it second
