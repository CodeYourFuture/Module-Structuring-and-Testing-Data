// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";


/*
1. the error is ReferenceError: Cannot access 'cityOfBirth' before initialization
2. the variable is declared after the console.log calls it which makes the variable
 in the temporal dead zone (TDZ).
 fixed code should be 
    const cityOfBirth = "Bolton";
    console.log(`I was born in ${cityOfBirth}`);
*/