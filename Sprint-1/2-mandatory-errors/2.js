// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

/*  The error is that 'cityOfBirth' is not defined at the time it's used.
    When 'console.log' line run, the variable 'cityOfBirth' has not been declared yet. 
    To fix this, we need to declare and assign 'cityOfBirth' before we use it.
    
    Correct order:
    const cityOfBirth = "Bolton";
    console.log(`I was born in ${cityOfBirth}`);
*/
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

